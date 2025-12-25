import pypdf
from io import BytesIO

def extract_text_from_pdf(file_content: bytes) -> str:
    """
    Extracts raw text from an uploaded PDF file.
    """
    try:
        pdf_reader = pypdf.PdfReader(BytesIO(file_content))
        text = ""
        for page in pdf_reader.pages:
            content = page.extract_text()
            if content:
                text += content + "\n"
        
        # Clean up whitespace
        return " ".join(text.split())
    
    except Exception as e:
        print(f"Error extracting PDF: {e}")
        return ""