/**
 * Supabase tests removed.
 *
 * The project no longer includes a Supabase client. Keep a small stub so
 * any imports of this module don't block the build; if you need the tests
 * again, re-implement them behind a guarded, Node-only script and provide
 * the `supabaseClient` in a secure way.
 */
export async function testSupabaseConnection() {
  // Indicate the test is intentionally disabled in this build.
  // Returning `false` as a neutral value; callers should handle accordingly.
  return false;
}

// noop when run directly
if (typeof window === 'undefined' && typeof process !== 'undefined' && process.argv[1]?.includes('test-supabase')) {
  console.log('Supabase tests are disabled in this build.');
  process.exit(0);
}

