import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Kanyawee Srithankaew",
    studentId: "660610741",
  });
};
