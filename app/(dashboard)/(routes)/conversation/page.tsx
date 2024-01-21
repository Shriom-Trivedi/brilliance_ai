'use client';
import Heading from '@/components/heading';
import { MessageSquare } from 'lucide-react';
import React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

function ConversationPage() {
  const form = useForm({
    defaultValues: {
      prompt: '',
    },
  });
  return (
    <div>
      <Heading
        title='Conversation'
        description='Our most advance conversation model.'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />
      <div className='px-4 lg:px-8'></div>
    </div>
  );
}

export default ConversationPage;
