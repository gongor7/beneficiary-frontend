"use server"
import { apiClient, apiClientBiometric } from "@/services";

export const getRegisteredFingerprints = async (personId: number) => {
  try {
    const response = await apiClient.GET(`/api/persons/showPersonFingerprint/${personId}`)
    const statusCode = response.status
    const responseData = await response.json()

    if(statusCode >= 400) {
      return {
        error: true,
        message: responseData.message
      }
    }
    if(statusCode == 200) {
      return {
        error: false,
        message: "Get registered fingerprints successful",
        data: responseData
      }
    }
  } catch(e: any) {
    console.error(e)
    return {
      error: true,
      message: "Error al obtener las huellas"
    }
  }
}

export const getAllFingerprintsIds = async () => {
  try {
    const response = await apiClient.GET(`/api/persons/showListFingerprint`)
    const statusCode = response.status
    const responseData = await response.json()

    if(statusCode >= 400) {
      return {
        error: true,
        message: responseData.message
      }
    }
    if(statusCode == 200) {
      return {
        error: false,
        message: "Get fingerprints successful",
        data: responseData
      }
    }
  } catch(e: any) {
    console.error(e)
    return {
      error: true,
      message: "Error al obtener el id de las huellas"
    }
  }
}

export const captureTwoFingerprints = async () => {
  try {
    const response = await apiClientBiometric.GET(`/api/biometrico/capturar/huellas`)
    const statusCode = response.status
    const responseData = await response.json()
    if(statusCode >= 400) {
      return {
        error: true,
        message: responseData.message
      }
    }
    if(statusCode == 200) {
      return {
        error: false,
        message: responseData.message,
        data: responseData.data
      }
    }
  } catch(e: any) {
    console.error(e)
    return {
      error: true,
      message: "Error al capturar dos huellas"
    }
  }
}

export const captureOneFingerprint = async () => {
  try {
    const response = await apiClientBiometric.GET(`/api/biometrico/capturar/huella`)
    const statusCode = response.status
    const responseData = await response.json()
    if(statusCode >= 400) {
      return {
        error: true,
        message: responseData.message
      }
    }
    if(statusCode == 200) {
      return {
        error: false,
        message: responseData.message,
        data: responseData.data
      }
    }
  } catch(e: any) {
    console.error(e)
    return {
      error: true,
      message: "Error al capturar una huellas"
    }
  }
}

export const registerFingerprints = async (personId: number, fingerprints: any ) => {
  try {
    const response = await apiClient.POST('/api/persons/createPersonFingerprint', {
      personId,
      fingerprints
    })
    const statusCode = response.status
    const responseData = await response.json()
    if(statusCode >= 400) {
      return {
        error: true,
        message: "Error al registrar las huellas"
      }
    }
    if(statusCode == 201) {
      return {
        error: false,
        message: responseData.message
      }
    }
  } catch(e: any) {
    console.error(e)
    return {
      error: true,
      message: "Error al registrar las huellas"
    }
  }

}