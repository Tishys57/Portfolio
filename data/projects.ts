export interface Project {
  id: string;
  title: string;
  category: string;
  brief: string;
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  results: string;
  details?: {
    academicCode?: string;
    supervisor?: string;
    lab?: string;
  };
}

export const projects: Project[] = [
  {
    id: "legal-llm",
    title: "LEGIT: Nepali Legal Small Language Model",
    category: "Natural Language Processing",
    brief: "A specialized GPT-decoder-based Small Language Model pre-trained entirely from scratch on a custom Nepali legal corpus.",
    problem: "Legal documentation in Nepal uses specialized, Sanskrit-derived formal language, creating comprehension gaps for regular citizens and lack of localized tools.",
    solution: "We compiled and curated a 10M token dataset from the Nepal Law Commission and Supreme Court, then trained a 30M parameter GPT-decoder model using customized tokenization.",
    techStack: ["Python", "PyTorch", "Hugging Face Transformers", "Tiktoken", "FastAPI", "Docker"],
    keyFeatures: [
      "Custom pre-training workflow with weight tying and scaled initialization",
      "Robust data engineering pipeline using memory-mapped files",
      "Two-phase scheduling (Linear Warmup + Cosine Annealing)",
      "Mixed precision training (bfloat16) optimized for computational constraints"
    ],
    results: "Achieved validation loss of 0.5684, perplexity of 1.8, and next-token accuracy of 82.9% on holdout validation data.",
    details: {
      academicCode: "AISP 322",
      supervisor: "Prof. Dr. Bal Krishna Bal",
      lab: "Information and Language Processing Research Lab, Kathmandu University"
    }
  },
  {
    id: "seizure-detection",
    title: "PELIPE: Patient-Agnostic Seizure Detection on EEG Data",
    category: "Medical AI & Signal Processing",
    brief: "A systematic deep learning pipeline investigating patient-specific and patient-agnostic seizure detection using the CHB-MIT Scalp EEG dataset.",
    problem: "High inter-patient variability in EEG signal morphology causes classical supervised models to fail catastrophically when evaluated on unseen patients.",
    solution: "Designed and implemented a modular system. We progressed from 1D-CNN baseline classifiers to a highly advanced 2D Spectrogram-CNN-LSTM-Attention structure coupled with Domain-Adversarial Neural Networks (DANN).",
    techStack: ["Python", "TensorFlow", "PyTorch", "Signal Processing", "NumPy", "Pandas"],
    keyFeatures: [
      "Short-Time Fourier Transform (STFT) for real-time 2D spectrogram mapping",
      "Strict event-based K-fold cross-validation to prevent data leakage",
      "Domain classifier with a Gradient Reversal Layer to learn patient-invariant features",
      "Z-score normalization and 80% overlap sliding window augmentation"
    ],
    results: "Patient-specific baseline achieved 98.9% event-detection sensitivity with only 2.51s latency. The DANN approach successfully regularized precision to 0.79 under domain shift.",
    details: {
      academicCode: "AISP 311",
      supervisor: "Mr. Sunil Regmi",
      lab: "Department of Artificial Intelligence, Kathmandu University"
    }
  },
  {
    id: "video-captioning",
    title: "Cultural Video Captioning & Nepali Dance Classification",
    category: "Computer Vision & Sequence Modeling",
    brief: "An end-to-end multi-task deep learning model capable of generating English/Nepali natural language captions and classifying traditional Nepalese dances.",
    problem: "Traditional Nepalese cultural dances lack accessible digital metadata, restricting cross-lingual accessibility for international and domestic observers.",
    solution: "Constructed a multi-task network pipeline combining a ResNet18 spatial feature extractor, VideoBERT temporal alignments, an LSTM text generation decoder, and a parallel Feed-Forward neural classification head.",
    techStack: ["Python", "PyTorch", "VideoBERT", "ResNet18", "OpenCV", "FastAPI"],
    keyFeatures: [
      "Real-time visual feature extraction across temporal frames",
      "Bilingual caption generation module (English and Nepali translations)",
      "Robust video segmentation to divide inputs into dynamic semantic segments",
      "Custom web interface demonstrating real-time model inference and playback overlays"
    ],
    results: "Successfully categorized and described complex traditional movements, enhancing digital preservation of Nepalese heritage.",
    details: {
      academicCode: "AISP 211",
      supervisor: "Mr. Sunil Regmi",
      lab: "Department of Computer Science and Engineering, Kathmandu University"
    }
  },
  {
    id: "sentiment-analysis",
    title: "YouTube Comments Sentiment Analysis",
    category: "Web & Natural Language Processing",
    brief: "A responsive system integrating Google YouTube Data API with machine learning pipelines to analyze and visualize public audience sentiment.",
    problem: "Navigating hundreds of thousands of comments to extract structured public feedback manually is highly inefficient for creators and analysts.",
    solution: "Created an automated end-to-end Python script extracting comment payloads on-the-fly from arbitrary URLs, forwarding them to highly optimized scikit-learn NLP classifiers.",
    techStack: ["Python", "scikit-learn", "YouTube Data API", "NLTK", "Git / GitHub"],
    keyFeatures: [
      "Streamlined OAuth comment extraction pipeline handling large payloads",
      "Interactive charts demonstrating public emotional trajectories",
      "Rigorous collaborative version control workflows using modular Git architecture"
    ],
    results: "Enabled near-instant classification and trend aggregation across complex colloquial comment sections."
  }
];