# greycodes.net
## Overview
`greycodes.net` is my personal website -- but more than that, it's a place to showcase some fun techniques and skills. This is my attempt to put together a website that's efficient, maintainable, secure, and well-documented. 

## Technologies
- GitHub
  - Git
  - Workflows / Actions (CI/CD)
    - Matrix deployments
    - Separated, reusable sub-workflows
    - Secrets
    - Static code analysis (CodeQL)
    - Automated testing upon PR
- Angular
  - Zoneless / OnPush
  - Headless Karma tests
- Cloudflare
  - Workers
    - Backblaze B2 Reverse Proxy
  - Pages
  - DNS
    - DNSSEC
  - Caching / Optimization
  - Security
- Backblaze B2
  - Object Storage (S3 Equivalent)

## Getting started
### Setup
If someone would like to clone this and use it as a base, or if I ever need to re-instantiate the project, refer to the [setup](./documentation/setup.md) guide.
### Local development
- Angular
  - Navigate to `./pages/greycodes.net/`
  - Install the packages
  - Use `npm run test` to test
  - Use `npm run start` to launch
- Web Worker
  - TODO... refer to the [original project](https://github.com/backblaze-b2-samples/cloudflare-b2) for more information.