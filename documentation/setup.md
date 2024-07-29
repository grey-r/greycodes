# Initial Setup
## Cloudflare

1. Create or log into a CloudFlare account.
1. Click "Add a site." Enter your previously purchased domain name.
1. Proceed through the site initialization steps -- this will link your site to CloudFlare's DNS.
1. Activate all basic features on the account as needed.
5. Under DNS, Settings enable DNSSEC
1. Under Speed, Optimization enable relevant features
3. Under SSL/TLS, enable strict mode
2. Under Security, Bots choose to block them
4. Enable Scrape Shield features

## Backblaze
1. Create or log into a BackBlaze account.
2. Create a new private bucket.
3. Set up the cache settings on said bucket (TODO)
4. Note down the friendly endpoint (s3) and bucket name.
5. Create an API Key that has read-only access for the bucket. Note down its ID and value.

## Environment Configuration
For each account, perform the following steps:
1. Start on your CloudFlare dashboard and navigate into the site
2. Copy the Zone ID and Account ID. Note them down somewhere.
3. Create an API key, granting it "Edit worker" access for a specific zone (your domain)
4. In another tab, open GitHub. 
5. Within GitHub, open Settings, Secrets and Variables, Actions
6. Manage environment secrets
7. Create a new environment
8. For that environment, add the following secrets:
    - B2_KEY_ID
    - B2_KEY_VALUE
    - CF_ACCOUNT_ID
    - CF_ZONE_ID  
    - CF_API_TOKEN_WORKER
9. For that environment, add the following env vars:
    - B2_BUCKET_NAME
    - B2_ENDPOINT

## Update Environments
Update the environment matrix for deployment in `.github/workflows/build-and-deploy.yaml`.
Commit to main.

## Deployment
Deploy the code once from GitHub, using Actions, Build & Deploy, Run Workflow.

## Post-Deployment
On each CloudFlare project within "Workers & Pages," set up the domain.
- The web pages should use the main domain
- The b2 worker should use a /images/ route on the web pages' domain
  - ensure that both `*.domain.net/images/*` and `domain.net/images/*` are supported