import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { forkJoin } from 'rxjs';
import * as html2canvas from 'html2canvas';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const HTML2_CANVAS_OPTIONS = {
  log: false,
  scale: 3,
  removeContainer: true,
  letterRendering: true,
  scrollY: -window.scrollY,
  ignoreElements: (node) => {
    if(node.nodeName === "IFRAME"){
      return true;
    }else{
      return false;
    }
  },
};

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.print();
  }

  print(){
    // let dd = {
    //   content: [
    //     'first paragraph',
    //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit non optio nesciunt reprehenderit, provident perspiciatis eos ratione nulla laborum fugiat laudantium incidunt ad quis natus, aspernatur autem itaque ducimus, quo exercitationem atque ex fugit perferendis? Laudantium cupiditate beatae,'
    //   ]
    // };

    // setTimeout(() => {
    //   pdfMake.createPdf(dd).download('test.pdf');
    // }, 300);

    let async = [];
    async.push(
      html2canvas(
        document.getElementById("test-div"),
        HTML2_CANVAS_OPTIONS
      ),
    );

    forkJoin(async).subscribe((result) => {
      let pro1: any = result[0];
      let pdfP = {
        pageOrientation: "landscape",
        content: [
          {
            image: pro1.toDataURL("image/png", 1),
            // width: 340,
            fit:[900,975],
            margin: [3,0,3,0],
          }
        ]
      }

      setTimeout(() => {
        pdfMake.createPdf(pdfP).download("test.pdf");
      }, 300);

    });

    
  }

}
