import { NextResponse } from 'next/server'

export async function GET() {
    console.log('This needs to be loaded every 10s')

    return NextResponse.json({data: "here"})
}
