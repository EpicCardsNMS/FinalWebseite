import logging
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

from services.email_service import send_inquiry_email

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/v1/inquiry", tags=["inquiry"])


class InquiryRequest(BaseModel):
    email: str
    card_type: str
    category: str
    details: str = ""


class InquiryResponse(BaseModel):
    success: bool
    message: str


@router.post("/submit", response_model=InquiryResponse)
async def submit_inquiry(data: InquiryRequest):
    """Submit a card buying inquiry"""
    try:
        success = await send_inquiry_email(
            customer_email=data.email,
            card_type=data.card_type,
            category=data.category,
            details=data.details,
        )

        if success:
            return InquiryResponse(
                success=True,
                message="Anfrage erfolgreich gesendet! Du erhältst in Kürze ein Angebot.",
            )
        else:
            raise HTTPException(
                status_code=500,
                detail="Anfrage konnte nicht gesendet werden. Bitte versuche es erneut.",
            )

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error submitting inquiry: {e}")
        raise HTTPException(
            status_code=500,
            detail="Ein Fehler ist aufgetreten. Bitte versuche es erneut.",
        )