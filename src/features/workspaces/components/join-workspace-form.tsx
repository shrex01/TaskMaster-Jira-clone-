'use client';

import { DottedSeparator } from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useJoinWorkspace } from '../api/use-join-workspace';
import { useInviteCode } from '../hooks/use-invite-code';
import { useRouter } from 'next/navigation';
import { useWorkspaceId } from '../hooks/use-workspace-id';

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({ initialValues }: JoinWorkspaceFormProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join workspace</CardTitle>
        <CardDescription>
          You have been invited to join <strong>{initialValues.name}</strong> workspace
        </CardDescription>
        <div className="px-4">
          <DottedSeparator />
        </div>
        <CardContent className="p-7">
          <div className="flex gap-2 flex-col lg:flex-row items-center justify-between">
            <Button
              variant="secondary"
              type="button"
              size="lg"
              asChild
              className="w-full lg:w-fit"
              disabled={isPending}
            >
              <Link href="/">Cancel</Link>
            </Button>
            <Button
              variant="primary"
              type="button"
              size="lg"
              className="w-full lg:w-fit"
              onClick={onSubmit}
              disabled={isPending}
            >
              Join Workspace
            </Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
