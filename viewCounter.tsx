'use client';
import { viewCountIncrement } from "@/app/action/view";
import { useEffect, startTransition } from 'react';
 

export default function ViewCounter(){
    useEffect(() => {
    // Use `startTransition` to call the Server Action.
    startTransition(async () => {
      await viewCountIncrement();
    });
  });    return null;
}