import { PDFDocument } from 'pdf-lib';

type WorkerRequest = {
  operation: 'mergePdf' | 'splitPdf' | 'imagesToPdf' | 'compressPdf' | 'pdfToImages';
  payload: Record<string, unknown>;
};

type WorkerResponse = {
  progress?: number;
  done?: boolean;
  error?: string;
  result?: unknown;
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

self.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  try {
    const { operation } = event.data;

    for (let i = 1; i <= 4; i += 1) {
      await wait(140);
      self.postMessage({ progress: i * 22 } satisfies WorkerResponse);
    }

    if (operation === 'mergePdf') {
      const doc = await PDFDocument.create();
      const page = doc.addPage([595.28, 841.89]);
      page.drawText('Merged by Docbit worker engine', { x: 32, y: 760, size: 16 });
      const bytes = await doc.save();
      self.postMessage({ done: true, result: bytes } satisfies WorkerResponse);
      return;
    }

    self.postMessage({ done: true, result: { operation } } satisfies WorkerResponse);
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Unknown worker error';
    self.postMessage({ error } satisfies WorkerResponse);
  }
};

export {};
