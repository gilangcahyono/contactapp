import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  try {
    const contacts = await prisma.contact.findMany({
      take: 10,
      orderBy: {
        name: "desc",
      },
    });

    if (!contacts.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Contacts not found",
          data: null,
          error: {
            message: "Contacts not found",
          },
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contacts fetched successfully",
      data: contacts,
      error: null,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        data: null,
        error: {
          message: (error as Error).message,
        },
      },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request): Promise<NextResponse> => {
  const body = await request.json();
  const { name, phone } = body;

  try {
    const contact = await prisma.contact.create({
      data: {
        name,
        phone,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Contact created successfully",
      data: contact,
      error: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        data: null,
        error: {
          message: (error as Error).message,
        },
      },
      { status: 500 }
    );
  }
};
