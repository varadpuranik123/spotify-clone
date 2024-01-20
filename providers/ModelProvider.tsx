"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <AuthModal/>
        </>
    );
}

export default ModelProvider;