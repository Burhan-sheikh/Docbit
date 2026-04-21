import {
  Camera,
  Images,
  FileImage,
  FileStack,
  Scissors,
  Minimize2,
} from 'lucide-react';
import type { ToolDefinition } from '../types/tools';

export const tools: ToolDefinition[] = [
  {
    id: 'scan',
    title: 'Scan Document',
    description: 'Capture and assemble multi-page scans into clean PDFs.',
    icon: Camera,
  },
  {
    id: 'image-to-pdf',
    title: 'Image → PDF',
    description: 'Convert ordered image sets into precision PDFs.',
    icon: Images,
  },
  {
    id: 'pdf-to-images',
    title: 'PDF → Images',
    description: 'Render pages as export-ready PNG/JPG images.',
    icon: FileImage,
  },
  {
    id: 'merge-pdf',
    title: 'Merge PDF',
    description: 'Reorder and merge multiple files while preserving quality.',
    icon: FileStack,
  },
  {
    id: 'split-pdf',
    title: 'Split PDF',
    description: 'Split by range or extract every page as its own file.',
    icon: Scissors,
  },
  {
    id: 'compress-pdf',
    title: 'Resize & Compress PDF',
    description: 'Resize page formats and reduce file size with live preview.',
    icon: Minimize2,
  },
];
