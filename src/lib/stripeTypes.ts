export interface SessionInterface {
    id:                          string;
    object:                      string;
    after_expiration:            null;
    allow_promotion_codes:       null;
    amount_subtotal:             number;
    amount_total:                number;
    automatic_tax:               AutomaticTax;
    billing_address_collection:  null;
    cancel_url:                  null;
    client_reference_id:         null;
    consent:                     null;
    consent_collection:          null;
    created:                     number;
    currency:                    string;
    currency_conversion:         null;
    custom_fields:               any[];
    custom_text:                 CustomText;
    customer:                    null;
    customer_creation:           string;
    customer_details:            CustomerDetails;
    customer_email:              null;
    expires_at:                  number;
    invoice:                     null;
    invoice_creation:            InvoiceCreation;
    livemode:                    boolean;
    locale:                      null;
    metadata:                    Metadata;
    mode:                        string;
    payment_intent:              string;
    payment_link:                null;
    payment_method_collection:   string;
    payment_method_options:      Metadata;
    payment_method_types:        string[];
    payment_status:              string;
    phone_number_collection:     PhoneNumberCollection;
    recovered_from:              null;
    setup_intent:                null;
    shipping_address_collection: null;
    shipping_cost:               null;
    shipping_details:            null;
    shipping_options:            any[];
    status:                      string;
    submit_type:                 null;
    subscription:                null;
    success_url:                 string;
    total_details:               TotalDetails;
    url:                         null;
}

export interface AutomaticTax {
    enabled: boolean;
    status:  null;
}

export interface CustomText {
    shipping_address: null;
    submit:           null;
}

export interface CustomerDetails {
    address:    Address;
    email:      string;
    name:       string;
    phone:      null;
    tax_exempt: string;
    tax_ids:    any[];
}

export interface Address {
    city:        null;
    country:     string;
    line1:       null;
    line2:       null;
    postal_code: string;
    state:       null;
}

export interface InvoiceCreation {
    enabled:      boolean;
    invoice_data: InvoiceData;
}

export interface InvoiceData {
    account_tax_ids:   null;
    custom_fields:     null;
    description:       null;
    footer:            null;
    metadata:          Metadata;
    rendering_options: null;
}

export interface Metadata {
}

export interface PhoneNumberCollection {
    enabled: boolean;
}

export interface TotalDetails {
    amount_discount: number;
    amount_shipping: number;
    amount_tax:      number;
}


export interface StripeCheckoutInterface {
    id:                          string;
    object:                      string;
    after_expiration:            null;
    allow_promotion_codes:       null;
    amount_subtotal:             number;
    amount_total:                number;
    automatic_tax:               AutomaticTax;
    billing_address_collection:  null;
    cancel_url:                  null;
    client_reference_id:         null;
    consent:                     null;
    consent_collection:          null;
    created:                     number;
    currency:                    string;
    currency_conversion:         null;
    custom_fields:               any[];
    custom_text:                 CustomText;
    customer:                    null;
    customer_creation:           string;
    customer_details:            null;
    customer_email:              null;
    expires_at:                  number;
    invoice:                     null;
    invoice_creation:            InvoiceCreation;
    livemode:                    boolean;
    locale:                      null;
    metadata:                    Metadata;
    mode:                        string;
    payment_intent:              null;
    payment_link:                null;
    payment_method_collection:   string;
    payment_method_options:      Metadata;
    payment_method_types:        string[];
    payment_status:              string;
    phone_number_collection:     PhoneNumberCollection;
    recovered_from:              null;
    setup_intent:                null;
    shipping_address_collection: null;
    shipping_cost:               null;
    shipping_details:            null;
    shipping_options:            any[];
    status:                      string;
    submit_type:                 null;
    subscription:                null;
    success_url:                 string;
    total_details:               TotalDetails;
    url:                         string;
}