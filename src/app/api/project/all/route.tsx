import { Client } from '@notionhq/client';
import { NextRequest } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});
const databaseId = process.env.NOTION_PROJECT_DATABASE_ID || '';

async function queryAllProjectData(): Promise<any[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'ascending',
        },
      ],
    });
    return response.results;
  } catch (error) {
    console.error(JSON.stringify(error));
    throw error;
  }
}

export async function GET(req: NextRequest) {
  try {
    const data = await queryAllProjectData();
    return new Response(JSON.stringify({ data, message: 'Success' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: `Failed: ${error?.toString()}` }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
