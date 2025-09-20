import React from 'react';

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">{title}</h1>
      <p className="mt-2 text-lg text-muted-foreground max-w-3xl">{description}</p>
    </div>
  );
}
