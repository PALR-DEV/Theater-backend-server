export const ticketTemplate = (ticket, qrimageUrl) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <style>
      @media screen and (max-width: 600px) {
        .mobile-wrapper {
          width: 100% !important;
          padding: 10px !important;
        }
        .mobile-content {
          width: 100% !important;
        }
        .receipt-table {
          width: 100% !important;
          padding: 10px !important;
        }
      }
    </style>

  </head>
  <body
    style="
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f7f7f7;
      color: #222;
      line-height: 1.6;
      -webkit-text-size-adjust: 100%
        -ms-text-size-adjust: 100%;
    "
  >
    <table
     class="mobile-wrapper"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="background-color: #f7f7f7"
    >
      <tr>
        <td align="center">
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              max-width: 600px;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
            "
          >
            <!-- Header -->
            <tr>
              <td
                style="
                  background-color: #222;
                  padding: 30px;
                  text-align: center;
                  color: white;
                "
              >
                <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px">
                  YOUR TICKETS
                </h1>
                <p style="margin: 5px 0 0; font-size: 16px; opacity: 0.9">
                  Thank you for your purchase
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 30px">
                <!-- Customer Name -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                  <tr>
                    <td
                      style="
                        text-align: center;
                        margin-bottom: 20px;
                        padding: 10px 0;
                        border-bottom: 1px dashed #e0e0e0;
                        width:100%;
                      "
                    >
                      <span
                        style="
                          font-size: 14px;
                          color: #777;
                          display: block;
                          margin-bottom: 4px;
                          text-align: center;
                        "
                        >Receipt for</span
                      >
                      <span
                        style="
                          font-size: 18px;
                          font-weight: 500;
                          color: #333;
                          letter-spacing: 0.5px;
                          text-align: center;
                          display: block;
                        "
                        >${ticket.name}</span
                      >
                    </td>
                  </tr>
                </table>

                <!-- Ticket Section -->
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                          background-color: #ffffff;
                          border-radius: 12px;
                          padding: 20px;
                          margin: 0 auto;
                          border: 1px solid #e0e0e0;
                          width: 100%;
                          max-width: 600px;
                        "
                >
                  <tr>
                    <td>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="
                          background-color: #ffffff;
                          border-radius: 12px;
                          padding: 20px;
                          display: inline-block;
                          margin: 0 auto;
                          border: 1px solid #e0e0e0;
                        "
                      >
                        <tr>
                          <td style="text-align:center;">
                            <img
                              src="${qrimageUrl}" 
                              alt="QR Code"
                              style="display: block; margin: 0 auto; max-width: 100%;"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              text-align: center;
                              margin: 15px 0 5px 0;
                              font-size: 16px;
                              color: #000;
                              font-weight: bold;
                              text-transform: uppercase;
                              letter-spacing: 0.5px;
                              padding: 6px 12px;
                              border: 2px solid #222;
                              border-radius: 4px;
                              display: block;
                              margin: 10px auto;
                            "
                          >
                            SCAN AT ENTRANCE
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 25px 0; text-align: center">
                      <div
                        style="
                          font-size: 22px;
                          font-weight: bold;
                          margin-bottom: 5px;
                        "
                      >
                        ${ticket.movieDetails.title}
                      </div>
                      <div
                        style="font-size: 16px; margin-bottom: 5px; color: #333"
                      >
                        ${new Date(ticket.movieDetails.showtime).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} • ${new Date(ticket.movieDetails.showtime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                      </div>
                      <div
                        style="font-size: 16px; margin-bottom: 5px; color: #333"
                      >
                        ${ticket.movieDetails.theater}
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="
                        height: 1px;
                        background-color: #e0e0e0;
                        margin: 25px 0;
                      "
                    ></td>
                  </tr>
                </table>

                <!-- Receipt Section -->
                <table
                  width="100%"
                  class="receipt-table"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    padding: 20px;
                    margin-top: 20px;
                    border: 1px solid #e0e0e0;
                  "
                >
                  <tr>
                    <td
                      style="
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 25px;
                        padding-bottom: 15px;
                        text-align: center;
                        color: #222;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                      "
                    >
                      Purchase Receipt
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                      >
                        <tr>
                          <td
                            style="
                              font-size: 14px;
                              color: #444;
                              padding-bottom: 10px;
                            "
                          >
                            ${ticket.tickets.adult} × Adult Ticket ($${ticket.ticketPrices.adult.toFixed(2)})
                          </td>
                          <td
                            style="
                              font-size: 14px;
                              font-weight: 500;
                              padding-bottom: 10px;
                              text-align: right;
                            "
                          >
                            $${(ticket.tickets.adult * ticket.ticketPrices.adult).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              font-size: 14px;
                              color: #444;
                              padding-bottom: 10px;
                            "
                          >
                            ${ticket.tickets.senior} × Senior Ticket ($${ticket.ticketPrices.senior.toFixed(2)})
                          </td>
                          <td
                            style="
                              font-size: 14px;
                              font-weight: 500;
                              padding-bottom: 10px;
                              text-align: right;
                            "
                          >
                            $${(ticket.tickets.senior * ticket.ticketPrices.senior).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              font-size: 14px;
                              color: #444;
                              padding-bottom: 10px;
                            "
                          >
                            ${ticket.tickets.kid} × Kid Ticket ($${ticket.ticketPrices.kid.toFixed(2)})
                          </td>
                          <td
                            style="
                              font-size: 14px;
                              font-weight: 500;
                              padding-bottom: 10px;
                              text-align: right;
                            "
                          >
                            $${(ticket.tickets.kid * ticket.ticketPrices.kid).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              padding-top: 15px;
                              border-top: 1px solid #e0e0e0;
                              font-weight: 500;
                              font-size: 14px;
                            "
                          >
                            Subtotal
                          </td>
                          <td
                            style="
                              padding-top: 15px;
                              border-top: 1px solid #e0e0e0;
                              font-weight: 500;
                              font-size: 14px;
                              text-align: right;
                            "
                          >
                            $${((ticket.tickets.adult * ticket.ticketPrices.adult) + (ticket.tickets.senior * ticket.ticketPrices.senior) + (ticket.tickets.kid * ticket.ticketPrices.kid)).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              font-size: 14px;
                              color: #444;
                              padding-top: 10px;
                            "
                          >
                            IVU (11.5%)
                          </td>
                          <td
                            style="
                              font-size: 14px;
                              font-weight: 500;
                              padding-top: 10px;
                              text-align: right;
                            "
                          >
                            $${(((ticket.tickets.adult * ticket.ticketPrices.adult) + (ticket.tickets.senior * ticket.ticketPrices.senior) + (ticket.tickets.kid * ticket.ticketPrices.kid)) * 0.115).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              font-size: 14px;
                              color: #444;
                              padding-top: 10px;
                            "
                          >
                            Service Fee
                          </td>
                          <td
                            style="
                              font-size: 14px;
                              font-weight: 500;
                              padding-top: 10px;
                              text-align: right;
                            "
                          >
                            $1.00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              padding-top: 15px;
                              border-top: 1px solid #e0e0e0;
                              font-weight: bold;
                              font-size: 16px;
                            "
                          >
                            Total
                          </td>
                          <td
                            style="
                              padding-top: 15px;
                              border-top: 1px solid #e0e0e0;
                              font-weight: bold;
                              font-size: 16px;
                              text-align: right;
                            "
                          >
                            $${ticket.amount}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Payment Info -->
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    margin: 30px auto 0;
                    text-align: center;
                    font-size: 14px;
                    color: #555;
                    width: 100%;
                  "
                >
                  <tr>
                    <td style="text-align: center; padding: 10px 0;">
                      Purchased on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  text-align: center;
                  padding: 20px 30px;
                  background-color: #f3f3f3;
                  color: #555;
                  font-size: 12px;
                  border-top: 1px solid #e0e0e0;
                "
              >
                <p style="margin: 0">
                  This ticket is valid for multiple entries (max ${ticket.max_scans}). No refunds
                  or exchanges.
                </p>
                <p style="margin: 15px 0 0">
                  Questions? Contact us at
                  <a
                    href="mailto:support@grandtheater.com"
                    style="color: #222; text-decoration: underline"
                    >support@grandtheater.com</a
                  >
                  or call (555) 123-4567
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

`;