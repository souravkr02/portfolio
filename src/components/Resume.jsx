// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from "react-pdf";
// import file from './SouravResume.pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

 
// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
 
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
 
//   return (
//     <div>
//       <Document className="container"
//         file={file}
//         onLoadSuccess={onDocumentLoadSuccess}
//         onLoadError={console.error}
//       >
//         <Page pageNumber={pageNumber} />
       
//       </Document>
      
//     </div>
//   );
// }

// export default Resume;

import React from 'react';
import {PDFtoIMG} from 'react-pdf-to-image';
import file from './SouravResume.pdf';

const Resume = () =>
    <div className="container">
        <PDFtoIMG  file={file}>
            {({pages}) => {
                if (!pages.length) return 'Loading...';
                return pages.map((page, index)=>
                    <img key={index} src={page}/>
                );
            }}
        </PDFtoIMG>
    </div>

export default Resume;
