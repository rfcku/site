// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gtFlg } from "../../utils"
export default function handler(req, res) {
  const { method:m } = req;
  const c = {
    'GET': gtFlg(118),
    'POST': gtFlg(125),
    'DELETE': gtFlg(136),
    'PATCH': gtFlg(143),
  }
  return res.status(200).json({ flag: c[m]})
}
