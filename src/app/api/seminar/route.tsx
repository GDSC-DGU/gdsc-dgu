import { Client } from '@notionhq/client';
import { NextRequest } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

// seminar 데이터 query select, 오름차순
async function querySeminarData(databaseId: string, tag: string): Promise<any[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Tags',
        multi_select: {
          contains: tag
        }
      },
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
  const url = new URL(req.url);
  const tag = url.searchParams.get('Tag');  // 쿼리 파라미터에서 세미나 ID 가져오기

  if (!tag) {
    return new Response(JSON.stringify({ message: 'Tag is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const databaseId = process.env.NOTION_SEMINAR_DATABASE_ID || ''; 

  try {
    const data = await querySeminarData(databaseId, tag);
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