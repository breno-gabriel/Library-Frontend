import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter, 
} from "@/components/ui/card";

const WrapperCard = ({ label, details, children }) => {
    return (
        <Card className="mt-4 max-w-5xl mx-auto p-4">
            <CardHeader className="text-center">
                <CardTitle>{label}</CardTitle>
                <CardDescription>{details}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
}

export default WrapperCard;
