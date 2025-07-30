import { NextResponse } from "next/server";
import { Params } from "@/types/request";
import prisma from "@/lib/prismaClient";

export const GET = async (
  request: Request,
  { params }: Params
): Promise<NextResponse> => {
  const { id } = await params;
  const contactId: number = Number(id);

  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id: contactId,
      },
      select: {
        name: true,
        phone: true,
      },
    });

    if (!contact) {
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
      data: contact,
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

export const PUT = async (
  request: Request,
  { params }: Params
): Promise<NextResponse> => {
  const body = await request.json();
  const { id } = await params;
  const contactId: number = Number(id);
  const { name, phone } = body;

  try {
    const contact = await prisma.contact.update({
      where: {
        id: contactId,
      },
      data: {
        name,
        phone,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact updated successfully",
        data: contact,
        error: null,
      },
      { status: 200 }
    );
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

export const DELETE = async (
  request: Request,
  { params }: Params
): Promise<NextResponse> => {
  const { id } = await params;
  const contactId: number = Number(id);

  try {
    const contact = await prisma.contact.delete({
      where: {
        id: contactId,
      },
    });

    // if (!contact) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Contacts not found",
    //       data: null,
    //       error: {
    //         message: "Contacts not found",
    //       },
    //     },
    //     { status: 404 }
    //   );
    // }

    return NextResponse.json(
      {
        success: true,
        message: "Contact deleted successfully",
        // data: contact,
        error: null,
      },
      { status: 204 }
    );
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
