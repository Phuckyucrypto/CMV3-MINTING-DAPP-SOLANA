# Launch Solana Minting DApp

## Installation and Setup

### 1. Install `pnpm`
Install `pnpm` globally:
```bash
npm install -g pnpm
```

### 2. Check `pnpm` Version
Verify the `pnpm` installation:
```bash
pnpm --version
```

### 3. Install Dependencies
Install project dependencies:
```bash
pnpm install
```

## Configure Whitelist

### 1. Update Allowlist
Edit `allowlist.tsx` to configure the wallets for the whitelist. Ensure the wallets are in the same order as used during the program deployment. Any changes made to the whitelist must also be reflected in the DApp to pass the correct proof for successful minting.

*Note: The default whitelist is not needed, only OG and WL.*

## Configure DApp Settings

### 1. Update Settings
Edit `settings.tsx` to configure the DApp settings. If whitelist phases have different labels than OG, WL, and Public, update these in the settings to ensure the DApp configures the UI correctly.

### 2. Update Environment Variables
Copy `.env.example` and rename it to `.env`. Update the environment variables as follows:

- `NEXT_PUBLIC_CANDY_MACHINE_ID`: Candy Machine ID from deployment.
- `NEXT_PUBLIC_MULTIMINT=true`: Keep this true to allow multiple minting; otherwise, the DApp will only allow one-by-one minting.
- `NEXT_PUBLIC_MAXMINTAMOUNT=15`: This sets the wallet mint limit. If the program has a higher limit, users can mint more until the wallet limit is reached.
- `NEXT_PUBLIC_LUT`: Leave blank until the DApp is initialized through the admin panel.
- `NEXT_PUBLIC_ENVIRONMENT=devnet/mainnet`: Set depending on your program deployment environment.
- `NEXT_PUBLIC_RPC`: Update with your QuickNode RPC. Public RPC can be used but will be slower.
- `NEXT_PUBLIC_BUYMARKBEER=false`: IMPORTANT - This must stay false.
- `NEXT_PUBLIC_MICROLAMPORTS=1001`: DO NOT CHANGE THIS.

## Testing and Deployment

### 1. Test in Local Environment
Run the following command to start the development server:
```bash
pnpm dev
```

### 2. Connect to DApp from Deployer Wallet
Use Phantom to connect to the DApp from the deployer wallet. If you haven't added your wallet to Phantom, paste everything from `wallet.json` in your deployment project or use the seed phrase.

### 3. Initialize the DApp
- Click "Initialize Everything."
- Click "Open Admin Panel."

### 4. Verify Merkle Trees
Verify that the Merkle trees match the proofs in your deployment config. If they do not, the list or format is incorrect.

### 5. Create LUT
- Click "Create LUT."
- Copy the value from the pop-up and paste it into the `.env` file as `NEXT_PUBLIC_LUT`.

### 6. Test Mint (Optional)
Test the minting process if desired. If everything works correctly, proceed to deploy.

### 7. Deploy to Vercel or Your Preferred Service
Deploy your DApp to Vercel or any other preferred deployment service.

By following these steps, you will be able to successfully set up and launch your Solana Minting DApp.