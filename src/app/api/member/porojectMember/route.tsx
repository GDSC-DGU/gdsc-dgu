import { Client } from '@notionhq/client';
import { NextRequest } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});


async function queryAllMemberData(): Promise<any[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_MEMBER_DATABASE_ID || '',
    });
    return response.results;
  } catch (error) {
    console.error(JSON.stringify(error));

    throw error;
  }
}


export async function GET(req: NextRequest) {
  try {
    const data = await queryAllMemberData();

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

