export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python (Proficient)", "Bash / Shell Scripting", "C++", "JavaScript", "SQL"]
  },
  {
    title: "AI / Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Hugging Face Transformers", "OpenCV", "NumPy", "Pandas"]
  },
  {
    title: "Deep Learning Architectures",
    skills: ["Transformers (GPT/BERT)", "1D & 2D CNNs", "LSTM", "Domain-Adversarial Neural Networks (DANN)", "FFNNs"]
  },
  {
    title: "DevOps & Deployment",
    skills: ["Docker", "Git / GitHub (Branching & Versioning)", "Linux (Ubuntu/Debian)", "CI/CD Principles", "AWS Fundamentals (EC2, S3)"]
  },
  {
    title: "Signal & Video Processing",
    skills: ["EEG Signal Preprocessing", "Spectrogram Conversion", "Short-Time Fourier Transform (STFT)", "Feature Extraction", "OCR Pipelines"]
  }
];