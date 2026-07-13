import type { LucideIcon } from 'lucide-react';

export type ToolStatus = 'available' | 'coming-soon';

export type ToolCategory = 'PDF Tools' | 'Image Tools' | 'Document Tools' | 'Excel Tools' | 'PowerPoint Tools' | 'SVG Tools';

export type ToolId =
  | 'pdf-to-word'
  | 'word-to-pdf'
  | 'merge-pdf'
  | 'compress-pdf'
  | 'image-to-pdf'
  | 'pdf-to-excel'
  | 'invoice-to-excel'
  | 'image-background-remover'
  | 'image-to-product-listing'
  | 'ocr-pdf'
  | 'split-pdf'
  | 'pdf-to-image'
  | 'pdf-to-grayscale';

export type UploadRule = {
  maxFiles: number;
  acceptedTypes: string[];
  errorMessage: string;
};

export type ToolDefinition = {
  id: ToolId;
  title: string;
  slug: string;
  category: ToolCategory;
  description: string;
  inputFormats: string[];
  outputFormats: string[];
  icon: LucideIcon;
  status: ToolStatus;
  uploadRule: UploadRule;
  related: ToolId[];
  seoTitle: string;
};

export type ProcessTask = {
  id: string;
  toolId: ToolId;
  status: 'queued' | 'processing' | 'done' | 'failed' | 'cancelled';
  progress: number;
  stage?: string;
  message?: string;
};
