import { NextApiRequest, NextApiResponse } from "next";
import poolConnect from "@/lib/database";


export default async function jogos(req: NextApiRequest, res: NextApiResponse) {
    const [rows] = await poolConnect.query("SELECT * FROM jogos");
    res.status(200).json(rows); 
}