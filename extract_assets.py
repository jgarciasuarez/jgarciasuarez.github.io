import os
import glob
import fitz  # PyMuPDF
from pathlib import Path

def extract_pdfs_to_png(base_dir, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    
    # Search for all PDF files in context directory recursively
    pdf_files = glob.glob(os.path.join(base_dir, '**', '*.pdf'), recursive=True)
    
    print(f"Found {len(pdf_files)} PDF files. Extracting to {out_dir}...")
    
    for pdf_path in pdf_files:
        try:
            doc = fitz.open(pdf_path)
            if len(doc) == 0:
                print(f"Skipping {pdf_path}: No pages found.")
                continue
                
            # We only extract the first page for the figure/portfolio preview
            page = doc.load_page(0)
            
            # Zoom to increase resolution (300 DPI approximately)
            zoom = 4.0
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat, alpha=True)
            
            # Form the output filename
            base_name = Path(pdf_path).stem
            out_file = os.path.join(out_dir, f"{base_name}.png")
            
            pix.save(out_file)
            print(f"Saved: {out_file}")
            
        except Exception as e:
            print(f"Error processing {pdf_path}: {e}")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    context_dir = os.path.join(current_dir, 'context')
    extracted_dir = os.path.join(context_dir, 'figures', 'extracted')
    
    extract_pdfs_to_png(context_dir, extracted_dir)
    print("Done!")
