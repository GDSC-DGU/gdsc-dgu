import { Client } from '@notionhq/client';
import { NotionToMarkdown } from "notion-to-md";
import { NextRequest } from 'next/server';

const notion = new Client({
    auth: process.env.NOTION_SECRET_KEY,
});  

const n2m = new NotionToMarkdown({ notionClient: notion });

async function getPageMarkdown(pageId: string): Promise<any> {
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);
    return mdString;
}
  

// Next.js의 API 라우트 핸들러
export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const pageId = url.searchParams.get('pageId');

    if (!pageId) {
        return new Response(JSON.stringify({ message: 'pageId is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const pageContent = await getPageMarkdown(pageId);
        return new Response(JSON.stringify({ data: pageContent, message: 'Success' }), {
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