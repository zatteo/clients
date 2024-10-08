import { ApiService } from "../../../abstractions/api.service";
import { AccountBillingApiServiceAbstraction } from "../../abstractions/account/account-billing-api.service.abstraction";
import {
  BillingInvoiceResponse,
  BillingTransactionResponse,
} from "../../models/response/billing.response";

export class AccountBillingApiService implements AccountBillingApiServiceAbstraction {
  constructor(private apiService: ApiService) {}

  async getBillingInvoices(startAfter?: string): Promise<BillingInvoiceResponse[]> {
    const queryParams = startAfter ? `?startAfter=${startAfter}` : "";
    const r = await this.apiService.send(
      "GET",
      `/accounts/billing/invoices${queryParams}`,
      null,
      true,
      true,
    );
    return r?.map((i: any) => new BillingInvoiceResponse(i)) || [];
  }

  async getBillingTransactions(startAfter?: string): Promise<BillingTransactionResponse[]> {
    const queryParams = startAfter ? `?startAfter=${startAfter}` : "";
    const r = await this.apiService.send(
      "GET",
      `/accounts/billing/transactions${queryParams}`,
      null,
      true,
      true,
    );
    return r?.map((i: any) => new BillingTransactionResponse(i)) || [];
  }
}
