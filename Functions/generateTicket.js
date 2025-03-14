import { supabase } from "../config/supabase.js";
import pkg from 'qrcode';
const { toDataURL } = pkg;

async function generateQRCode(ticketId) {
    const qrCodeDataUrl = await toDataURL(ticketId.toString());

    // Extract the base64-encoded image data from the data URL
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '');
    // Convert the base64 data into a binary buffer
    const imageBuffer = Buffer.from(base64Data, 'base64');
    return imageBuffer; // Return the buffer for further use
}

async function saveQRCodeToStorage(qrCodeBuffer, ticketId) {
    try {
        const fileName = `qr-codes-${ticketId}-${Date.now()}.png`;
        const {data, error} = await supabase.storage.from('qr-codes').upload(fileName, qrCodeBuffer, {
            contentType: 'image/png',
            upsert: true,
        });

        if(error) {
            throw error;
        }

        const { data: {publicUrl}} = supabase.storage.from('qr-codes').getPublicUrl(fileName);
        return publicUrl;
        
    } catch (error) {
        throw error;
        
    }

}

export {generateQRCode, saveQRCodeToStorage};