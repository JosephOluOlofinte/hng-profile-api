import { Request, Response } from "express";
import { fetchCatFact } from "../utils/fetchCatFact";

const user = {
  email: 'josepholofinte @gmail.com',
  name: 'Joseph Olofinte',
  stack: 'Node.js/Express',
};


export const profileController = async (req: Request, res: Response) => {
  try {
    const catFact = await fetchCatFact();

    return res.status(200).json({
      status: 'success',
      user: user,
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'error',
      message: 'INTERNAL SERVER ERROR. Please try later.'
    })
  }
}