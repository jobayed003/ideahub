'use client';

import Loader from '@/components/global/Loader';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { actionLoginUser } from '@/lib/server-action/auth-action';
import { FormSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState('');

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: { email: '', password: '' },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (formData) => {
    const { error } = await actionLoginUser(formData);

    if (error) {
      form.reset();
      setSubmitError(error.message);
    }

    router.replace('/dashboard');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onChange={() => {
          if (submitError) setSubmitError('');
        }}
        className='w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col'
      >
        <Link
          href='/'
          className='
          w-full
          flex
          justify-left
          items-center'
        >
          <Image src={'/ideahub.svg'} alt='cypress Logo' width={50} height={50} />
          <span
            className='font-semibold
          dark:text-white text-4xl first-letter:ml-2'
          >
            IdeaHub.
          </span>
        </Link>
        <FormDescription
          className='
        text-foreground/60'
        >
          An all-In-One Collaboration and Productivity Platform
        </FormDescription>
        <FormField
          disabled={isLoading}
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type='email' placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type='password' placeholder='Password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button type='submit' className='w-full p-6' size='lg' disabled={isLoading}>
          {!isLoading ? 'Login' : <Loader />}
        </Button>
        <span className='self-container'>
          Dont have an account?{' '}
          <Link href='/signup' className='text-primary'>
            Sign Up
          </Link>
        </span>
      </form>
    </Form>
  );
};

export default LoginPage;
