import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

logger = logging.getLogger(__name__)

RECIPIENT_EMAIL = "info@epiccardsnms.com"


async def send_inquiry_email(
    customer_email: str,
    card_type: str,
    category: str,
    details: str = "",
) -> bool:
    """
    Send an inquiry notification email.
    Since we don't have SMTP credentials configured, we log the inquiry
    and return success. In production, configure SMTP settings.
    """
    try:
        subject = f"Neue Ankauf-Anfrage: {card_type} - {category}"
        body = f"""
Neue Ankauf-Anfrage über EpicCards Website:

Kartentyp: {card_type}
Kategorie: {category}
Kunden-E-Mail: {customer_email}
Details: {details if details else "Keine weiteren Details angegeben"}

---
Diese Nachricht wurde automatisch über das EpicCards Ankauf-Formular generiert.
        """.strip()

        # Log the inquiry for now
        logger.info(f"=== NEUE ANKAUF-ANFRAGE ===")
        logger.info(f"An: {RECIPIENT_EMAIL}")
        logger.info(f"Von: {customer_email}")
        logger.info(f"Kartentyp: {card_type}")
        logger.info(f"Kategorie: {category}")
        logger.info(f"Details: {details}")
        logger.info(f"=== ENDE ANFRAGE ===")

        return True

    except Exception as e:
        logger.error(f"Error processing inquiry: {e}")
        return False