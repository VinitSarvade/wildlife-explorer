import { twc } from 'react-twc';

const Input = twc.input`flex h-10 w-full rounded-md border border-wild-700 bg-wild-50 px-3 py-2 text-sm ring-offset-wild-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-wild-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`;

Input.displayName = 'Input';

export { Input };
