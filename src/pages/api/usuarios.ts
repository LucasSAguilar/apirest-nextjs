import { NextApiRequest, NextApiResponse } from "next";

const usuarios = (req: NextApiRequest, res: NextApiResponse) => {
    return ( 
        res.status(200).json({
            id: 1,
            nome: 'Fulano de Tal',
            email: 'email@email.com'
        })
     );
}
 
export default usuarios;