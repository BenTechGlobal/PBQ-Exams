# CodingHamme Practice Exam – Product Activation

## Structure

```
artifacts/
  index.html
  styles.css
  app.js
  data/
    ccna-200-301.js   # PRODUCT_CODE = "CCNA-200-301"
    sc-100.js         # PRODUCT_CODE = "SC-100"
    aws-saa-c03.js    # PRODUCT_CODE = "AWS-SAA-C03"
    sy0-701.js        # PRODUCT_CODE = "SY0-701" (CompTIA Security+)
```

## Activation

Products stay **hidden** until a matching product code is entered via **+ Activate Product**.

| Product | Activation code |
|---------|-----------------|
| Cisco CCNA 200-301 | `CCNA-200-301` |
| Microsoft SC-100 | `SC-100` |
| AWS SAA-C03 | `AWS-SAA-C03` |
| CompTIA Security+ SY0-701 | `SY0-701` |

Activated product IDs are stored in `localStorage` under `codinghamme_prep_v1` → `activated[]` and persist across sessions on the same browser.

## Serve locally

ES modules require a static server (not `file://`):

```bash
cd artifacts
npx --yes serve .
# or: python3 -m http.server 8080
```

Open the URL shown, activate a code, then start a test.
