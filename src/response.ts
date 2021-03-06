import { TransactionReceiptWithDecodedLogs } from 'ethereum-types';

export class Response {
    public txHash : string;
    public receiptAsync : Promise<TransactionReceiptWithDecodedLogs>;

    constructor (txHash: string, receiptAsync: Promise<TransactionReceiptWithDecodedLogs>) {
        this.txHash = txHash;
        this.receiptAsync = receiptAsync;
    }
}