/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import BlogNav from "@/components/ui/blog-nav";
import Image from "next/image";
import aiEngineeringSnippet from "@/public/ai-engineering-snippet.png";

export default function BlogPost() {
  const chunkingCode = `// Chunks lessons by heading structure to preserve context
const chunks = chunkLesson({
  lessonId: "lesson-uuid",
  content: "<h2>Introduction</h2><p>Content...</p>",
  moduleId: "module-uuid"
});

// Output: Array of semantically meaningful chunks
// Each chunk preserves its section title and context`;

  const embeddingCode = `// Generate 768-dimensional embedding vector
const embedding = await getEmbedding("How do loops work?");
// Returns: [0.123, -0.456, 0.789, ...] (768 numbers)

// Batch process all lesson chunks
const embeddings = await getBatchEmbeddings(chunks, {
  onProgress: (current, total) => console.log(\`\${current}/\${total}\`)
});`;

  const vectorDbCode = `-- Create table with vector column (768 dimensions)
CREATE TABLE lesson_chunks (
  id UUID PRIMARY KEY,
  chunk_text TEXT NOT NULL,
  embedding vector(768),
  section_title TEXT,
  lesson_id UUID,
  module_id UUID
);

-- Create IVFFlat index for fast similarity search
CREATE INDEX idx_lesson_chunks_embedding 
ON lesson_chunks 
USING ivfflat (embedding vector_cosine_ops);`;

  const searchCode = `export async function searchLessonChunks(params: {
  query: string;
  moduleId?: string;
  matchThreshold?: number;
  matchCount?: number;
}) {
  const { query, moduleId, matchThreshold = 0.5, matchCount = 5 } = params;

  // Generate query embedding
  const queryEmbedding = await getEmbedding(query);
  const vectorString = \`[\${queryEmbedding.join(',')}]\`;

  // Perform vector similarity search via PostgreSQL RPC
  const { data, error } = await supabase.rpc('search_lesson_chunks', {
    query_embedding: vectorString,
    match_module_id: moduleId || null,
    match_threshold: matchThreshold,
    match_count: matchCount,
  });

  if (error) throw error;

  return data.map((row: any) => ({
    sectionTitle: row.section_title,
    chunkText: row.chunk_text,
    similarity: row.similarity,
  }));
}`;

  const sqlFunctionCode = `CREATE FUNCTION search_lesson_chunks(
  query_embedding TEXT,
  match_module_id UUID DEFAULT NULL,
  match_threshold FLOAT DEFAULT 0.5,
  match_count INT DEFAULT 5
)
RETURNS TABLE (
  section_title TEXT,
  chunk_text TEXT,
  similarity FLOAT
)
AS $$
BEGIN
  RETURN QUERY
  SELECT
    lc.section_title,
    lc.chunk_text,
    1 - (lc.embedding <=> query_embedding::vector(768)) AS similarity
  FROM lesson_chunks lc
  WHERE
    (match_module_id IS NULL OR lc.module_id = match_module_id)
    AND (1 - (lc.embedding <=> query_embedding::vector(768))) >= match_threshold
  ORDER BY lc.embedding <=> query_embedding::vector(768)
  LIMIT match_count;
END;
$$ LANGUAGE plpgsql;`;

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <BlogNav />

      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Building a Production RAG System for AI-Powered Tutoring
      </motion.h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on April 12, 2026 · Tags:{" "}
        <span className="italic">
          AI Engineering, RAG, Vector Databases, Machine Learning, PostgreSQL
        </span>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Building a Production RAG System for AI-Powered Tutoring",
            description:
              "How I built a production-ready Retrieval-Augmented Generation system for AICademy using local embeddings, PostgreSQL pgvector, and semantic chunking to make AI tutoring 80% more efficient.",
            author: { "@type": "Person", name: "Alex Rendler" },
            datePublished: "2026-04-12",
            image: "https://rendlr.dev/og/production-rag-ai-tutoring.png",
            publisher: {
              "@type": "Organization",
              name: "Rendlr",
              logo: {
                "@type": "ImageObject",
                url: "https://rendlr.dev/Logos/Logo.png",
              },
            },
          }),
        }}
      />

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        When building AICademy, my AI-powered tutoring platform, I faced a
        critical challenge: how do you give an AI tutor the right context
        without overwhelming it with information? The answer was implementing a{" "}
        <strong>production-ready RAG (Retrieval-Augmented Generation)</strong>{" "}
        system that retrieves only the most relevant content for each student
        question.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-8">The Problem</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Initially, my AI tutor received <em>entire lessons</em> with every
        prompt. This created three major issues:
      </p>
      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>
          <strong>Oversized prompts</strong> – Wasted tokens and increased costs
        </li>
        <li>
          <strong>Generic responses</strong> – Too much irrelevant context
          confused the AI
        </li>
        <li>
          <strong>Poor scalability</strong> – Can't handle large content
          libraries
        </li>
      </ul>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        With RAG, the system now retrieves only the 3-5 most relevant content
        chunks based on semantic similarity to the student's question. This
        resulted in <strong>80% smaller prompts</strong> and significantly more
        targeted, accurate responses.
      </p>

      <div className="my-8">
        <Image
          src={aiEngineeringSnippet}
          alt="RAG System Architecture Diagram"
          className="rounded-lg shadow-lg w-full"
          priority
        />
      </div>

      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Technical Architecture
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Here's the technology stack I chose for this production system:
      </p>
      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>
          <strong>Embeddings</strong>: Ollama with nomic-embed-text
          (768-dimensional vectors)
        </li>
        <li>
          <strong>Vector Database</strong>: PostgreSQL with pgvector extension
        </li>
        <li>
          <strong>Platform</strong>: Supabase
        </li>
        <li>
          <strong>Runtime</strong>: Next.js 15 + TypeScript
        </li>
        <li>
          <strong>Cost</strong>: $0 (fully local embeddings vs OpenAI API fees)
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-3 mt-6">Why These Choices?</h3>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I chose <strong>Ollama over OpenAI</strong> for several reasons:
      </p>
      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>Free, local embedding generation</li>
        <li>Privacy-first (no data sent to third parties)</li>
        <li>Fast performance (&lt;100ms per embedding)</li>
        <li>768-dim vectors optimized for retrieval tasks</li>
      </ul>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        For the vector database, I went with{" "}
        <strong>pgvector over Pinecone/Weaviate</strong> because:
      </p>
      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>Leverages existing PostgreSQL infrastructure</li>
        <li>Native SQL integration</li>
        <li>No additional service to manage</li>
        <li>Battle-tested indexing algorithms (IVFFlat)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Implementation Process
      </h2>

      <h3 className="text-xl font-semibold mb-3 mt-6">
        Step 1: Semantic Chunking
      </h3>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I built a content chunker that intelligently splits lessons into
        semantic units by preserving heading structure and context:
      </p>
      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="typescript" style={oneDark} wrapLongLines>
          {chunkingCode}
        </SyntaxHighlighter>
      </div>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        <strong>Results</strong>: 31 lessons transformed into 29 semantic
        chunks, each preserving its section title and context.
      </p>

      <h3 className="text-xl font-semibold mb-3 mt-6">
        Step 2: Vectorization with Local Embeddings
      </h3>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Next, I created an Ollama wrapper to generate embeddings for all
        content:
      </p>
      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="typescript" style={oneDark} wrapLongLines>
          {embeddingCode}
        </SyntaxHighlighter>
      </div>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        <strong>Validation</strong>: I achieved 76.4% similarity between
        semantically related queries like "How do parameters work?" and "What
        are function parameters?"
      </p>

      <h3 className="text-xl font-semibold mb-3 mt-6">
        Step 3: Vector Database Setup
      </h3>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I configured PostgreSQL with pgvector for similarity search:
      </p>
      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="sql" style={oneDark} wrapLongLines>
          {vectorDbCode}
        </SyntaxHighlighter>
      </div>

      <h3 className="text-xl font-semibold mb-3 mt-6">
        Step 4: Semantic Search Implementation
      </h3>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I built the vector search function using cosine similarity:
      </p>
      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="typescript" style={oneDark} wrapLongLines>
          {searchCode}
        </SyntaxHighlighter>
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        The PostgreSQL function uses the cosine distance operator (
        <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
          {"<=>"}
        </code>
        ) for efficient similarity matching:
      </p>
      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="sql" style={oneDark} wrapLongLines>
          {sqlFunctionCode}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Key Engineering Challenge
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        The biggest challenge was <strong>type compatibility</strong> across
        stack layers. The Supabase JavaScript client couldn't pass embedding
        arrays as <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">vector(768)</code> parameters to PostgreSQL RPC
        functions.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        <strong>Symptoms</strong>:
      </p>
      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>SQL queries worked perfectly</li>
        <li>JavaScript RPC calls returned 0 results</li>
        <li>No error messages (silent failure)</li>
      </ul>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        <strong>Solution</strong>:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>Changed RPC function parameter from <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">vector(768)</code> to <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">TEXT</code></li>
        <li>Cast TEXT to vector internally: <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">query_embedding::vector(768)</code></li>
        <li>Updated TypeScript to send embeddings as strings: <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">[0.1,0.2,0.3,...]</code></li>
      </ol>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This workaround balances type safety with cross-platform compatibility.
      </p>

      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Results & Validation
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Here are real test queries and their top results:
      </p>

      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg mb-4">
        <p className="font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Query: "How do loops work in programming?"
        </p>
        <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200">
          <li>Result 1: "Common Loop Patterns" - 68.2% similarity ✅</li>
          <li>Result 2: "While Loops" - 55.7% similarity ✅</li>
          <li>Result 3: "Pattern Recognition" - 48.9% similarity</li>
        </ul>
      </div>

      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg mb-4">
        <p className="font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Query: "What is scientific thinking?"
        </p>
        <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200">
          <li>Result 1: "Core Steps of Scientific Thinking" - 66.5% similarity ✅</li>
          <li>Result 2: "Making Observations" - 61.3% similarity ✅</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-3 mt-6">Performance Metrics</h3>
      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li><strong>Embedding Generation</strong>: &lt;100ms per query</li>
        <li><strong>Vector Search</strong>: &lt;50ms per search</li>
        <li><strong>Similarity Scores</strong>: 0.3-0.7 range for relevant content</li>
        <li><strong>Chunks Retrieved</strong>: 5 per query (configurable)</li>
        <li><strong>Prompt Size Reduction</strong>: ~80% (5 chunks vs full lessons)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 mt-8">
        Impact on AI Tutoring
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        The difference is dramatic:
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
        <p className="font-semibold text-red-800 dark:text-red-300 mb-2">
          Before RAG:
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 text-sm font-mono">
          Student: "How do loops work?"<br />
          System: [Sends entire 5000-token lesson on programming basics]<br />
          AI: [Generic response based on too much context]
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-green-800 dark:text-green-300 mb-2">
          After RAG:
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 text-sm font-mono">
          Student: "How do loops work?"<br />
          System: [Retrieves 3 chunks: "Common Loop Patterns", "While Loops", "For Loop Examples"]<br />
          AI: [Focused, relevant response about loops specifically]
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-3 mt-8">Key Takeaways</h2>
      <ol className="list-decimal pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li className="mb-2">
          <strong>RAG isn't just about retrieval</strong> – chunking strategy
          and similarity thresholds are critical
        </li>
        <li className="mb-2">
          <strong>Local embeddings are viable</strong> – Ollama provides
          production-quality embeddings at $0 cost
        </li>
        <li className="mb-2">
          <strong>PostgreSQL can be a vector DB</strong> – pgvector eliminates
          need for specialized services
        </li>
        <li className="mb-2">
          <strong>Type systems matter</strong> – cross-platform type
          compatibility requires careful engineering
        </li>
        <li className="mb-2">
          <strong>Validation is essential</strong> – semantic similarity tests
          ensure quality before production
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-3 mt-8">Future Enhancements</h2>
      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>Hybrid search (semantic + keyword)</li>
        <li>Re-ranking with cross-encoders</li>
        <li>Dynamic chunk sizing based on content type</li>
        <li>Caching layer for frequent queries</li>
        <li>A/B testing RAG vs non-RAG responses</li>
      </ul>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-zinc-800 dark:text-zinc-100 font-semibold mb-2">
          Bottom Line:
        </p>
        <p className="text-zinc-700 dark:text-zinc-200">
          Built a production RAG system from scratch that makes AI tutoring
          responses 80% more efficient and significantly more relevant, all
          while keeping costs at $0 through local embedding generation.
        </p>
      </div>

      <div />
    </div>
  );
}
