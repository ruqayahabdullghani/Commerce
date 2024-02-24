"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  const ApiKEY=`pk_test_51OmFeEADD39v08beovDhUCLNkJfrf2m1kOOzvV1kjmwRipaan365cNZB3SIkvotcmqp6AjypqKTIWf99tWf0UQIJ002tRwKWHJ`
  return (
    <USCProvider 
        mode="payment"
        cartMode="client-only"  
        stripe={ApiKEY}
        successUrl="https://commerce-next-yt.vercel.app/stripe/success"
        cancelUrl="https://commerce-next-yt.vercel.app/stripe/error"
        currency="USD"
        billingAddressCollection={false}
        shouldPersist={true}
        language="en-US">
          {children}

    </USCProvider>
  )
}
