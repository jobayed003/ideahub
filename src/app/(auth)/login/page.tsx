'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as z from 'zod';

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState('');

  //   const form = useForm<z.infer<typeof >>();

  return <div>LoginPage</div>;
};

export default LoginPage;
