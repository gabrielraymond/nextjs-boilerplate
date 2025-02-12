import { PokemonDetails } from '@/components/features/PokemonDetails';

export default async function PokemonPage({
  params,
}: {
  params: { id: string };
}) {
  // Await the params object (even though it's synchronous in this case)
  const { id } = await params;

  return (
    <div>
      <PokemonDetails id={id} />
    </div>
  );
}