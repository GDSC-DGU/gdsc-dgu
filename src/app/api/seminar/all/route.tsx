import { Client } from '@notionhq/client';
import { NextRequest } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

// seminar 데이터 query select, 오름차순
async function queryAllSeminarData(databaseId: string): Promise<any[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date', 
          direction: 'ascending' 
        }
      ]
    });

    return response.results;
  } catch (error) {
    console.error('Error querying Notion database and fetching member data:', JSON.stringify(error));
    throw error;
  }
}

type Data = {
  items?: any[];
  message: string;
};

export async function GET(req: NextRequest) {
  const databaseId = process.env.NOTION_SEMINAR_DATABASE_ID || ''; 

  try {
    const data = await queryAllSeminarData(databaseId);
    return new Response(JSON.stringify({ data, message: 'Success' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: `Failed: ${error?.toString()}` }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}