import { Client } from '@notionhq/client';
import { NextRequest } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

// seminar id를 가진 member 불러오기
async function queryMemberData(
  databaseId: string,
  seminarId: string,
): Promise<any[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Seminars',
        relation: {
          contains: seminarId,
        },
      },
    });

    return response.results;
  } catch (error) {
    console.error(
      'Error querying Notion database and fetching member data:',
      JSON.stringify(error),
    );
    throw error;
  }
}

type Data = {
  items?: any[];
  message: string;
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const seminarId = url.searchParams.get('seminarId') || ''; // 쿼리 파라미터에서 세미나 ID 가져오기
  const databaseId = process.env.NOTION_MEMBER_DATABASE_ID || '';

  try {
    const data = await queryMemberData(databaseId, seminarId);
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
