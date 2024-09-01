import { Component, computed, signal } from '@angular/core';
import { GalleryComponent } from '../../core/components/gallery/gallery.component';
import { GalleryPhotoComponent } from '../../core/components/gallery-item/gallery-item.component';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [GalleryComponent, GalleryPhotoComponent],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss',
})
export class PhotographyComponent {
  private readonly imageData = [
    {
      name: '20240811_bison_DSC00505',
      sources: [
        {
          path: '20240811_bison_DSC00505-480-h.jpg',
          width: 480,
          height: 480,
          megapixels: '0.230',
        },
        {
          path: '20240811_bison_DSC00505-800-h.jpg',
          width: 800,
          height: 800,
          megapixels: '0.640',
        },
        {
          path: '20240811_bison_DSC00505-1280-h.jpg',
          width: 1280,
          height: 1280,
          megapixels: '1.64',
        },
        {
          path: '20240811_bison_DSC00505-1600-h.jpg',
          width: 1600,
          height: 1600,
          megapixels: '2.56',
        },
        {
          path: '20240811_bison_DSC00505-1920-h.jpg',
          width: 1920,
          height: 1920,
          megapixels: '3.69',
        },
        {
          path: '20240811_bison_DSC00505-2160-h.jpg',
          width: 1920,
          height: 1920,
          megapixels: '3.69',
        },
      ],
      aspectRatio: 1,
    },
    {
      name: '20240811_mammoth_4x5_DSC00521',
      sources: [
        {
          path: '20240811_mammoth_4x5_DSC00521-480-h.jpg',
          width: 384,
          height: 480,
          megapixels: '0.184',
        },
        {
          path: '20240811_mammoth_4x5_DSC00521-800-h.jpg',
          width: 640,
          height: 800,
          megapixels: '0.512',
        },
        {
          path: '20240811_mammoth_4x5_DSC00521-1280-h.jpg',
          width: 1024,
          height: 1280,
          megapixels: '1.31',
        },
        {
          path: '20240811_mammoth_4x5_DSC00521-1600-h.jpg',
          width: 1280,
          height: 1600,
          megapixels: '2.05',
        },
        {
          path: '20240811_mammoth_4x5_DSC00521-1920-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
        {
          path: '20240811_mammoth_4x5_DSC00521-2160-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
      ],
      aspectRatio: 0.8,
    },
    {
      name: '20240811_mammoth_4x5_DSC00524',
      sources: [
        {
          path: '20240811_mammoth_4x5_DSC00524-480-h.jpg',
          width: 384,
          height: 480,
          megapixels: '0.184',
        },
        {
          path: '20240811_mammoth_4x5_DSC00524-800-h.jpg',
          width: 640,
          height: 800,
          megapixels: '0.512',
        },
        {
          path: '20240811_mammoth_4x5_DSC00524-1280-h.jpg',
          width: 1024,
          height: 1280,
          megapixels: '1.31',
        },
        {
          path: '20240811_mammoth_4x5_DSC00524-1600-h.jpg',
          width: 1280,
          height: 1600,
          megapixels: '2.05',
        },
        {
          path: '20240811_mammoth_4x5_DSC00524-1920-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
        {
          path: '20240811_mammoth_4x5_DSC00524-2160-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
      ],
      aspectRatio: 0.8,
    },
    {
      name: '20240811_mammoth_4x5_DSC00525',
      sources: [
        {
          path: '20240811_mammoth_4x5_DSC00525-480-h.jpg',
          width: 384,
          height: 480,
          megapixels: '0.184',
        },
        {
          path: '20240811_mammoth_4x5_DSC00525-800-h.jpg',
          width: 640,
          height: 800,
          megapixels: '0.512',
        },
        {
          path: '20240811_mammoth_4x5_DSC00525-1280-h.jpg',
          width: 1024,
          height: 1280,
          megapixels: '1.31',
        },
        {
          path: '20240811_mammoth_4x5_DSC00525-1600-h.jpg',
          width: 1280,
          height: 1600,
          megapixels: '2.05',
        },
        {
          path: '20240811_mammoth_4x5_DSC00525-1920-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
        {
          path: '20240811_mammoth_4x5_DSC00525-2160-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
      ],
      aspectRatio: 0.8,
    },
    {
      name: '20240811_mammoth_4x5_DSC00526',
      sources: [
        {
          path: '20240811_mammoth_4x5_DSC00526-480-h.jpg',
          width: 384,
          height: 480,
          megapixels: '0.184',
        },
        {
          path: '20240811_mammoth_4x5_DSC00526-800-h.jpg',
          width: 640,
          height: 800,
          megapixels: '0.512',
        },
        {
          path: '20240811_mammoth_4x5_DSC00526-1280-h.jpg',
          width: 1024,
          height: 1280,
          megapixels: '1.31',
        },
        {
          path: '20240811_mammoth_4x5_DSC00526-1600-h.jpg',
          width: 1280,
          height: 1600,
          megapixels: '2.05',
        },
        {
          path: '20240811_mammoth_4x5_DSC00526-1920-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
        {
          path: '20240811_mammoth_4x5_DSC00526-2160-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
      ],
      aspectRatio: 0.8,
    },
    {
      name: '20240811_mammoth_4x5_DSC00527',
      sources: [
        {
          path: '20240811_mammoth_4x5_DSC00527-480-h.jpg',
          width: 384,
          height: 480,
          megapixels: '0.184',
        },
        {
          path: '20240811_mammoth_4x5_DSC00527-800-h.jpg',
          width: 640,
          height: 800,
          megapixels: '0.512',
        },
        {
          path: '20240811_mammoth_4x5_DSC00527-1280-h.jpg',
          width: 1024,
          height: 1280,
          megapixels: '1.31',
        },
        {
          path: '20240811_mammoth_4x5_DSC00527-1600-h.jpg',
          width: 1280,
          height: 1600,
          megapixels: '2.05',
        },
        {
          path: '20240811_mammoth_4x5_DSC00527-1920-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
        {
          path: '20240811_mammoth_4x5_DSC00527-2160-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
      ],
      aspectRatio: 0.8,
    },
    {
      name: '20240811_mammoth_DSC00510',
      sources: [
        {
          path: '20240811_mammoth_DSC00510-480-h.jpg',
          width: 384,
          height: 480,
          megapixels: '0.184',
        },
        {
          path: '20240811_mammoth_DSC00510-800-h.jpg',
          width: 640,
          height: 800,
          megapixels: '0.512',
        },
        {
          path: '20240811_mammoth_DSC00510-1280-h.jpg',
          width: 1024,
          height: 1280,
          megapixels: '1.31',
        },
        {
          path: '20240811_mammoth_DSC00510-1600-h.jpg',
          width: 1280,
          height: 1600,
          megapixels: '2.05',
        },
        {
          path: '20240811_mammoth_DSC00510-1920-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
        {
          path: '20240811_mammoth_DSC00510-2160-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
      ],
      aspectRatio: 0.8,
    },
    {
      name: '20240811_misc_DSC00534',
      sources: [
        {
          path: '20240811_misc_DSC00534-480-h.jpg',
          width: 480,
          height: 480,
          megapixels: '0.230',
        },
        {
          path: '20240811_misc_DSC00534-800-h.jpg',
          width: 800,
          height: 800,
          megapixels: '0.640',
        },
        {
          path: '20240811_misc_DSC00534-1280-h.jpg',
          width: 1280,
          height: 1280,
          megapixels: '1.64',
        },
        {
          path: '20240811_misc_DSC00534-1600-h.jpg',
          width: 1600,
          height: 1600,
          megapixels: '2.56',
        },
        {
          path: '20240811_misc_DSC00534-1920-h.jpg',
          width: 1920,
          height: 1920,
          megapixels: '3.69',
        },
        {
          path: '20240811_misc_DSC00534-2160-h.jpg',
          width: 1920,
          height: 1920,
          megapixels: '3.69',
        },
      ],
      aspectRatio: 1,
    },
    {
      name: '20240811_misc_DSC00545',
      sources: [
        {
          path: '20240811_misc_DSC00545-480-h.jpg',
          width: 480,
          height: 480,
          megapixels: '0.230',
        },
        {
          path: '20240811_misc_DSC00545-800-h.jpg',
          width: 800,
          height: 800,
          megapixels: '0.640',
        },
        {
          path: '20240811_misc_DSC00545-1280-h.jpg',
          width: 1280,
          height: 1280,
          megapixels: '1.64',
        },
        {
          path: '20240811_misc_DSC00545-1600-h.jpg',
          width: 1600,
          height: 1600,
          megapixels: '2.56',
        },
        {
          path: '20240811_misc_DSC00545-1920-h.jpg',
          width: 1920,
          height: 1920,
          megapixels: '3.69',
        },
        {
          path: '20240811_misc_DSC00545-2160-h.jpg',
          width: 1920,
          height: 1920,
          megapixels: '3.69',
        },
      ],
      aspectRatio: 1,
    },
    {
      name: '20240811_misc_DSC00548',
      sources: [
        {
          path: '20240811_misc_DSC00548-480-h.jpg',
          width: 480,
          height: 480,
          megapixels: '0.230',
        },
        {
          path: '20240811_misc_DSC00548-800-h.jpg',
          width: 800,
          height: 800,
          megapixels: '0.640',
        },
        {
          path: '20240811_misc_DSC00548-1280-h.jpg',
          width: 1280,
          height: 1280,
          megapixels: '1.64',
        },
        {
          path: '20240811_misc_DSC00548-1600-h.jpg',
          width: 1600,
          height: 1600,
          megapixels: '2.56',
        },
        {
          path: '20240811_misc_DSC00548-1920-h.jpg',
          width: 1920,
          height: 1920,
          megapixels: '3.69',
        },
        {
          path: '20240811_misc_DSC00548-2160-h.jpg',
          width: 1920,
          height: 1920,
          megapixels: '3.69',
        },
      ],
      aspectRatio: 1,
    },
    {
      name: '20240811_misc_wide_DSC00531',
      sources: [
        {
          path: '20240811_misc_wide_DSC00531-480-w.jpg',
          width: 480,
          height: 240,
          megapixels: '0.115',
        },
        {
          path: '20240811_misc_wide_DSC00531-800-w.jpg',
          width: 800,
          height: 400,
          megapixels: '0.320',
        },
        {
          path: '20240811_misc_wide_DSC00531-1280-w.jpg',
          width: 1280,
          height: 640,
          megapixels: '0.819',
        },
        {
          path: '20240811_misc_wide_DSC00531-1600-w.jpg',
          width: 1600,
          height: 800,
          megapixels: '1.28',
        },
        {
          path: '20240811_misc_wide_DSC00531-1920-w.jpg',
          width: 1920,
          height: 960,
          megapixels: '1.84',
        },
        {
          path: '20240811_misc_wide_DSC00531-2160-w.jpg',
          width: 2160,
          height: 1080,
          megapixels: '2.33',
        },
      ],
      aspectRatio: 2,
    },
    {
      name: '20240811_misc_wide_DSC00537',
      sources: [
        {
          path: '20240811_misc_wide_DSC00537-480-w.jpg',
          width: 480,
          height: 240,
          megapixels: '0.115',
        },
        {
          path: '20240811_misc_wide_DSC00537-800-w.jpg',
          width: 800,
          height: 400,
          megapixels: '0.320',
        },
        {
          path: '20240811_misc_wide_DSC00537-1280-w.jpg',
          width: 1280,
          height: 640,
          megapixels: '0.819',
        },
        {
          path: '20240811_misc_wide_DSC00537-1600-w.jpg',
          width: 1600,
          height: 800,
          megapixels: '1.28',
        },
        {
          path: '20240811_misc_wide_DSC00537-1920-w.jpg',
          width: 1920,
          height: 960,
          megapixels: '1.84',
        },
        {
          path: '20240811_misc_wide_DSC00537-2160-w.jpg',
          width: 2160,
          height: 1080,
          megapixels: '2.33',
        },
      ],
      aspectRatio: 2,
    },
    {
      name: '20240811_misc_wide_DSC00539',
      sources: [
        {
          path: '20240811_misc_wide_DSC00539-480-w.jpg',
          width: 480,
          height: 240,
          megapixels: '0.115',
        },
        {
          path: '20240811_misc_wide_DSC00539-800-w.jpg',
          width: 800,
          height: 400,
          megapixels: '0.320',
        },
        {
          path: '20240811_misc_wide_DSC00539-1280-w.jpg',
          width: 1280,
          height: 640,
          megapixels: '0.819',
        },
        {
          path: '20240811_misc_wide_DSC00539-1600-w.jpg',
          width: 1600,
          height: 800,
          megapixels: '1.28',
        },
        {
          path: '20240811_misc_wide_DSC00539-1920-w.jpg',
          width: 1920,
          height: 960,
          megapixels: '1.84',
        },
        {
          path: '20240811_misc_wide_DSC00539-2160-w.jpg',
          width: 2160,
          height: 1080,
          megapixels: '2.33',
        },
      ],
      aspectRatio: 2,
    },
    {
      name: '20240811_prariedog_DSC00490',
      sources: [
        {
          path: '20240811_prariedog_DSC00490-480-h.jpg',
          width: 384,
          height: 480,
          megapixels: '0.184',
        },
        {
          path: '20240811_prariedog_DSC00490-800-h.jpg',
          width: 640,
          height: 800,
          megapixels: '0.512',
        },
        {
          path: '20240811_prariedog_DSC00490-1280-h.jpg',
          width: 1024,
          height: 1280,
          megapixels: '1.31',
        },
        {
          path: '20240811_prariedog_DSC00490-1600-h.jpg',
          width: 1280,
          height: 1600,
          megapixels: '2.05',
        },
        {
          path: '20240811_prariedog_DSC00490-1920-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
        {
          path: '20240811_prariedog_DSC00490-2160-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
      ],
      aspectRatio: 0.8,
    },
    {
      name: '20240811_prariedog_DSC00492',
      sources: [
        {
          path: '20240811_prariedog_DSC00492-480-h.jpg',
          width: 384,
          height: 480,
          megapixels: '0.184',
        },
        {
          path: '20240811_prariedog_DSC00492-800-h.jpg',
          width: 640,
          height: 800,
          megapixels: '0.512',
        },
        {
          path: '20240811_prariedog_DSC00492-1280-h.jpg',
          width: 1024,
          height: 1280,
          megapixels: '1.31',
        },
        {
          path: '20240811_prariedog_DSC00492-1600-h.jpg',
          width: 1280,
          height: 1600,
          megapixels: '2.05',
        },
        {
          path: '20240811_prariedog_DSC00492-1920-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
        {
          path: '20240811_prariedog_DSC00492-2160-h.jpg',
          width: 1536,
          height: 1920,
          megapixels: '2.95',
        },
      ],
      aspectRatio: 0.8,
    },
  ];

  private readonly assetFolder = 'assets/out/';

  public readonly images = this.imageData.map((image) => ({
    ...image,
    srcSet: image.sources
      .map((s) => `${this.assetFolder}${s.path} ${s.width}w`)
      .join(','),
    src: `assets/out/${image.sources[0].path}`,
    fullWidth: image.sources[image.sources.length - 1].width,
    fullHeight: image.sources[image.sources.length - 1].height,
    fullSrc: `assets/out/${image.sources[image.sources.length - 1].path}`,
  }));
}
