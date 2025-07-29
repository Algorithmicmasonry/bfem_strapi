import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js";
import { sendEmail } from "./email";

const VALID_EMAIL = "emmanueloamen@gmail.com"
const VALID_PASSWORD = "123456789"
 
const prisma = new PrismaClient();
 
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  advanced: {
    cookiePrefix: "church-admin",
    crossSubDomainCookies: {
    enabled: false
    },
    database: {
      generateId: false, 
    },
  },
  emailAndPassword: {  
    enabled: true,
    autoSignIn: false,
     // Custom validation for hardcoded credentials
    async validateEmailAndPassword(email: string, password: string) {
      // For now, check against hardcoded credentials
      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        return {
          user: {
            id: "admin-user",
            email: VALID_EMAIL,
            name: "Admin User",
            emailVerified: true,
          }
        }
      }
      return false
    },
    account: {
      accountLinking: {
        enabled: true,
      }
    },
    resetPasswordTokenExpiresIn: 3600,
  },
  session : {
expiresIn: 60 * 60 * 24,
updateAge: 60 * 60 * 24,
  },
  plugins: [nextCookies()]
});

/*
Pastor Tolu Olanusi 
pastortoluolanusi@gmail.com 
08033594720 
General overseer 
 
 
Ifeoluwa Olanusi  
ifenusi1@gmail.com 
 
 
Content uploader 
 
Kolawole Titilayo 
bankolelolade755@yahoo.com 
Content uploader 

*/