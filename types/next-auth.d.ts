
import { Session } from "next-auth";

// Extend the Session interface to include the 'id' property
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Assuming 'id' is a string
      email: string;
      image : string;
      name : string;
    };
  }
}
