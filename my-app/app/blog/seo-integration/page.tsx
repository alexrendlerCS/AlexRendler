"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const clustererSnippet = `
class KeywordClusterer:
    def __init__(self, n_clusters: int = 5, use_transformer: bool = False):
        self.n_clusters = n_clusters
        self.use_transformer = use_transformer
        self.vectorizer = None
        self.kmeans = None
        self.umap = None

        if self.use_transformer:
            try:
                from .embedding_helpers import initialize_transformer
                if not initialize_transformer():
                    logger.warning("SentenceTransformer not available. Falling back to TF-IDF.")
                    self.use_transformer = False
            except ImportError:
                logger.warning("Embedding helpers not available. Falling back to TF-IDF.")
                self.use_transformer = False

    def _get_embeddings(self, keywords: List[str]) -> np.ndarray:
        if self.use_transformer:
            try:
                from .embedding_helpers import get_transformer_embeddings
                embeddings = get_transformer_embeddings(keywords)
                if embeddings is not None:
                    return embeddings
            except Exception:
                self.use_transformer = False

        if self.vectorizer is None:
            self.vectorizer = TfidfVectorizer(max_features=1000)
        return self.vectorizer.fit_transform(keywords).toarray()

    def cluster_keywords(self, keywords: List[str]) -> Tuple[np.ndarray, np.ndarray]:
        if len(keywords) < 2:
            raise ValueError("At least 2 keywords are required for clustering")

        n_clusters = min(self.n_clusters, len(keywords))
        self.kmeans = KMeans(n_clusters=n_clusters, random_state=42)
        self.umap = UMAP(n_components=2, n_neighbors=min(15, len(keywords) - 1), min_dist=0.1, random_state=42)

        embeddings = self._get_embeddings(keywords)
        reduced_embeddings = self.umap.fit_transform(embeddings)
        labels = self.kmeans.fit_predict(reduced_embeddings)

        return reduced_embeddings, labels
`;

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        How I Used AI & Machine Learning to Transform SEO Keyword Strategy
      </motion.h1>

      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on June 2025 · Tags:{" "}
        <span className="italic">AI, Machine Learning, SEO, Data Analysis</span>
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This project started as a personal experiment in analyzing keyword data
        from mock Google Ads campaigns. What it became was a full-stack,
        ML-powered SEO tool capable of identifying high-potential keywords,
        generating intelligent recommendations, and visualizing strategic
        insights — all backed by machine learning and natural language
        processing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        🧠 ML Techniques I Learned
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I learned to combine traditional ML methods like{" "}
        <strong>KMeans clustering</strong> and
        <strong> TF-IDF vectorization</strong> with modern NLP techniques such
        as
        <strong> SentenceTransformer embeddings</strong> and{" "}
        <strong>UMAP</strong> for dimensionality reduction. These tools helped
        me group semantically similar keywords and visualize their relationships
        in 2D space.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Here's a key part of the system: a reusable{" "}
        <code>KeywordClusterer</code> class that performs clustering based on
        either traditional or transformer-based embeddings:
      </p>

      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="python" style={oneDark} wrapLongLines>
          {clustererSnippet}
        </SyntaxHighlighter>
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This logic allowed the system to group terms like “running shoes” and
        “best sneakers” together — even if they shared no direct words — and
        then assign performance-based tags across entire clusters. It made
        strategic gaps more visible, like overused branded terms or neglected
        niche opportunities.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        🤖 Using AI to Make Real Decisions
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Rather than just analyze keywords, I wanted my system to{" "}
        <em>recommend</em> actions: which terms to cut, which to test, and where
        the upside might be highest. With CTR uplift logic, performance
        quartiles, and dynamic scoring, the tool surfaces actionable insights in
        a clean dashboard.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I also created an <strong>opportunity tagging system</strong>: 🔥 High
        Potential, 🚧 Low CTR, 💡 Niche Opportunity — simple labels that help
        even non-technical marketers identify what to focus on next.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        💬 Thought-Provoking Questions
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This project also raised deeper questions that go beyond implementation:
      </p>

      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>
          When should AI make decisions, and when should it merely advise?
        </li>
        <li>Are we optimizing for visibility or for genuine value?</li>
        <li>
          How do we avoid creating echo chambers of “top keywords” that lack
          originality?
        </li>
        <li>
          Can AI help promote quality content — or does it risk flattening
          creativity?
        </li>
      </ul>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        These questions push me to not only build smarter systems, but also more
        human-aware ones. Marketing isn’t just numbers — it’s psychology,
        timing, and trust. And AI should reflect that.
      </p>

      <Link
        href="/blog"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}
