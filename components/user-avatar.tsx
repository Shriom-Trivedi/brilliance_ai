import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const UserAvatar = () => {
  return (
    <Avatar className='h-8 w-8'>
      <AvatarImage src={'/logo.png'} />
      <AvatarFallback>You</AvatarFallback>
    </Avatar>
  );
};
