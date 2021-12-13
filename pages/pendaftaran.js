import React, { useEffect, useState } from "react";
import { useSteps, Steps, Step } from "chakra-ui-steps";
import {
  Container,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Box,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import Layouts from "../layouts";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const requestTransportasi = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/alat-transportasi",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const requestStatusAnak = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/status-anak",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const requestPendidikan = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/pendidikan-terakhir",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const requestPekerjaan = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/pekerjaan",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const requestPenghasilan = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/penghasilan",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const listTransportasi = await requestTransportasi.json();
  const listStatusAnak = await requestStatusAnak.json();
  const listPendidikan = await requestPendidikan.json();
  const listPekerjaan = await requestPekerjaan.json();
  const listPenghasilan = await requestPenghasilan.json();

  return {
    props: {
      listTransportasi,
      listStatusAnak,
      listPendidikan,
      listPekerjaan,
      listPenghasilan,
    },
  };
}

const Pendaftaran = ({
  listTransportasi,
  listStatusAnak,
  listPendidikan,
  listPekerjaan,
  listPenghasilan,
}) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const toast = useToast();
  const router = useRouter();

  const { nextStep, prevStep, activeStep, reset } = useSteps({
    initialStep: 0,
  });

  const onSubmit = (values) => {
    toast({
      title: "Terkirim",
      description: `Pendaftaran Atas Nama ${values?.nama_lengkap} Berhasil Dikirim !`,
      status: "success",
      duration: 9000,
      position: "top",
      isClosable: true,
    });
    router.push("/");
  };

  const listProvinsi = async () => {
    const response = await axios.get(
      `https://actions-api-sd.sandboxindonesia.id/api/provinces/?search${watchProvinsi}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return response.data.map((elem) => ({
      label: elem.name,
      value: elem.code,
    }));
  };

  const listKabKota = async () => {
    const response = await axios.get(
      `https://actions-api-sd.sandboxindonesia.id/api/cities/?province_code=${watchProvinsi?.value}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return response.data.map((elem) => ({
      label: elem.name,
      value: elem.code,
    }));
  };

  const listKecamatan = async () => {
    const response = await axios.get(
      `https://actions-api-sd.sandboxindonesia.id/api/districts/?city_code=${watchKabKota?.value}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return response.data.map((elem) => ({
      label: elem.name,
      value: elem.code,
    }));
  };

  const listDesa = async () => {
    const response = await axios.get(
      `https://actions-api-sd.sandboxindonesia.id/api/villages/?district_code=${watchKecamatan?.value}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return response.data.map((elem) => ({
      label: elem.name,
      value: elem.code,
    }));
  };

  const watchWaliMurid = watch("wali_murid", 1);
  const watchProvinsi = watch("provinsi", null);
  const watchKabKota = watch("kabkota", null);
  const watchKecamatan = watch("kecamatan", null);

  const jenisWali = [
    {
      value: 1,
      label: "Orang Tua",
    },
    {
      value: 2,
      label: "Wali",
    },
  ];

  return (
    <Layouts>
      <Container maxW="7xl" py={20}>
        <Heading py={10} color="secondary.500">
          FORM PENDAFTARAN SISWA
        </Heading>
        <Box borderRadius="20px" boxShadow="lg" p={10} color="secondary.600">
          <Steps activeStep={activeStep}>
            <Step key="step_1">
              <FormControl isInvalid={errors?.nama_lengkap} mb={4}>
                <FormLabel>Nama Lengkap</FormLabel>
                <Input {...register("nama_lengkap", { required: true })} />
                {errors?.nama_lengkap && (
                  <FormErrorMessage>Masukan nama lengkap</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.nama_panggilan} mb={4}>
                <FormLabel>Nama Panggilan</FormLabel>
                <Input {...register("nama_panggilan", { required: true })} />
                {errors?.nama_panggilan && (
                  <FormErrorMessage>Masukan nama panggilan</FormErrorMessage>
                )}
              </FormControl>
              <FormControl id="jenis_kelamin" mb={5}>
                <FormLabel
                  mb={3}
                  fontSize="md"
                  fontWeight="light"
                  letterSpacing="1px"
                >
                  Jenis Kelamin
                </FormLabel>
                <Controller
                  name="jenis_kelamin"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange } }) => (
                    <RadioGroup
                      onChange={(val) => onChange(val)}
                      defaultValue="1"
                    >
                      <Stack align="center" direction="row">
                        <Radio
                          value="1"
                          marginRight="1rem"
                          bg="#E9ECEF"
                          size="md"
                        >
                          <Text fontSize="14px" letterSpacing="1px">
                            Laki - Laki
                          </Text>
                        </Radio>
                        <Radio value="0" size="md" bg="#E9ECEF">
                          <Text fontSize="14px" letterSpacing="1px">
                            Perempuan
                          </Text>
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  )}
                />
              </FormControl>
              <FormControl isInvalid={errors?.tempat_lahir} mb={4}>
                <FormLabel>Tempat Lahir</FormLabel>
                <Input
                  {...register("tempat_lahir", { required: true })}
                  placeholder="Tempat Lahir"
                  w="50%"
                />
                {errors?.tempat_lahir && (
                  <FormErrorMessage>Masukan nama lengkap</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.tgl_lahir} mb={4}>
                <FormLabel>Tanggal Lahir</FormLabel>
                <Input
                  type="date"
                  {...register("tgl_lahir", { required: true })}
                  w="50%"
                />
                {errors?.tgl_lahir && (
                  <FormErrorMessage>Masukan tanggal lahir</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.nisn} mb={4}>
                <FormLabel>NISN (opsional)</FormLabel>
                <Input {...register("nisn")} />
              </FormControl>
              <FormControl isInvalid={errors?.asal_sekolah} mb={4}>
                <FormLabel>Asal Sekolah</FormLabel>
                <Input {...register("asal_sekolah", { required: true })} />
                {errors?.asal_sekolah && (
                  <FormErrorMessage>Masukan asal sekolah</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.alamat_sekolah_asal} mb={4}>
                <FormLabel>Alamat Sekolah Asal</FormLabel>
                <Input
                  {...register("alamat_sekolah_asal", { required: true })}
                />
                {errors?.alamat_sekolah_asal && (
                  <FormErrorMessage>
                    Masukan alamat sekolah asal
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.nik} mb={4}>
                <FormLabel>NIK</FormLabel>
                <Input {...register("nik", { required: true })} />
                {errors?.nik && (
                  <FormErrorMessage>
                    masukan nomor induk kependudukan
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.status_anak} mb={4}>
                <FormLabel>Status Anak Sebagai</FormLabel>
                <Select
                  options={listStatusAnak?.data?.map((el) => ({
                    label: el.nama_status,
                    value: el.id,
                  }))}
                />
                {errors?.status_anak && (
                  <FormErrorMessage>Masukan status anak</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.anak_ke} mb={4}>
                <FormLabel>Anak ke Berapa</FormLabel>
                <Input {...register("anak_ke", { required: true })} />
                {errors?.anak_ke && (
                  <FormErrorMessage>masukan anak ke keberapa</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.berangkat_sekolah_dengan} mb={4}>
                <FormLabel>Berangkat Sekolah Dengan</FormLabel>
                <Select
                  defaultValue={listTransportasi[0]}
                  options={listTransportasi?.data?.map((el) => ({
                    label: el.nama_alat_transportasi,
                    value: el.id,
                  }))}
                />
                {errors?.berangkat_sekolah_dengan && (
                  <FormErrorMessage>
                    Masukan jenis keberangkatan
                  </FormErrorMessage>
                )}
              </FormControl>
              <Box pt={4} display="flex" justifyContent="flex-end">
                <Button
                  bg="primary.600"
                  _hover={{ bg: "primary.700" }}
                  color="white"
                  fontWeight="100"
                  fontSize="18px"
                  px={4}
                  onClick={nextStep}
                >
                  Selanjutnya
                </Button>
              </Box>
            </Step>
            <Step key="step_2">
              <FormControl isInvalid={errors?.wali_murid} mb={4}>
                <FormLabel>Jenis Wali Murid</FormLabel>
                <Controller
                  name="wali_murid"
                  control={control}
                  defaultValue={false}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      onChange={(val) => onChange(val)}
                      value={value}
                      defaultValue={jenisWali[0]}
                      options={jenisWali.map((el) => ({
                        label: el.label,
                        value: el.value,
                      }))}
                    />
                  )}
                />
                {errors?.wali_murid && (
                  <FormErrorMessage>Masukan jenis wali</FormErrorMessage>
                )}
              </FormControl>
              {watchWaliMurid?.value === 1 && (
                <Box borderWidth="1px" borderRadius="md">
                  <Box borderWidth="1px" borderRadius="md" m={8}>
                    <Text
                      borderTopRadius={"md"}
                      bg="primary.600"
                      px={8}
                      py={4}
                      fontSize={"18px"}
                      color="white"
                      fontWeight={"600"}
                    >
                      Data Ayah
                    </Text>

                    <Box p={8}>
                      <FormControl isInvalid={errors?.nama_lengkap_ayah} mb={4}>
                        <FormLabel>Nama Lengkap Ayah</FormLabel>
                        <Input
                          {...register("nama_lengkap_ayah", { required: true })}
                        />
                        {errors?.nama_lengkap_ayah && (
                          <FormErrorMessage>
                            Masukan nama lengkap ayah
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl isInvalid={errors?.tahun_lahir_ayah} mb={4}>
                        <FormLabel>Tahun Lahir Ayah</FormLabel>
                        <Input
                          type="years"
                          {...register("tahun_lahir_ayah", { required: true })}
                          w="50%"
                          placeholder="contoh: 2021"
                        />
                        {errors?.tahun_lahir_ayah && (
                          <FormErrorMessage>
                            Masukan tahun lahir ayah
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl isInvalid={errors?.no_handphone_ayah} mb={4}>
                        <FormLabel>No Handphone Ayah </FormLabel>
                        <Input
                          type="number"
                          {...register("no_handphone_ayah", { required: true })}
                          placeholder="contoh: 081521902355"
                        />
                        {errors?.no_handphone_ayah && (
                          <FormErrorMessage>
                            Masukan no handphone ayah
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.pendidikan_ayah}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Pendidikan</FormLabel>
                        <Controller
                          name="pendidikan_ayah"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPendidikan?.data?.map((el) => ({
                                label: el.nama_pendidikan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.pendidikan_ayah && (
                          <FormErrorMessage>
                            Masukan pendidikan ayah
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.pekerjaan_ayah}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Pekerjaan</FormLabel>
                        <Controller
                          name="pekerjaan_ayah"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPekerjaan?.data?.map((el) => ({
                                label: el.nama_pekerjaan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.pekerjaan_ayah && (
                          <FormErrorMessage>
                            Masukan Pekerjaan ayah
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.penghasilan_ayah}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Penghasilan per Bulan</FormLabel>
                        <Controller
                          name="penghasilan_ayah"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPenghasilan?.data?.map((el) => ({
                                label: el.penghasilan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.penghasilan_ayah && (
                          <FormErrorMessage>
                            Masukan penghasilan perbulan ayah
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    </Box>
                  </Box>
                  <Box borderWidth="1px" borderRadius="md" m={8}>
                    <Text
                      borderTopRadius={"md"}
                      bg="primary.600"
                      px={8}
                      py={4}
                      fontSize={"18px"}
                      color="white"
                      fontWeight={"600"}
                    >
                      Data Ibu
                    </Text>

                    <Box p={8}>
                      <FormControl isInvalid={errors?.nama_lengkap_ibu} mb={4}>
                        <FormLabel>Nama Lengkap Ibu</FormLabel>
                        <Input
                          {...register("nama_lengkap_ibu", { required: true })}
                        />
                        {errors?.nama_lengkap_ibu && (
                          <FormErrorMessage>
                            Masukan nama lengkap ayah
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl isInvalid={errors?.tahun_lahir_ibu} mb={4}>
                        <FormLabel>Tahun Lahir Ibu</FormLabel>
                        <Input
                          type="years"
                          {...register("tahun_lahir_ibu", { required: true })}
                          w="50%"
                          placeholder="contoh: 2021"
                        />
                        {errors?.tahun_lahir_ibu && (
                          <FormErrorMessage>
                            Masukan tahun lahir ibu
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl isInvalid={errors?.no_handphone_ibu} mb={4}>
                        <FormLabel>No Handphone Ibu </FormLabel>
                        <Input
                          type="number"
                          {...register("no_handphone_ibu", { required: true })}
                          placeholder="contoh: 081521902355"
                        />
                        {errors?.no_handphone_ibu && (
                          <FormErrorMessage>
                            Masukan no handphone ibu
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.pendidikan_ibu}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Pendidikan</FormLabel>
                        <Controller
                          name="pendidikan_ibu"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPendidikan?.data?.map((el) => ({
                                label: el.nama_pendidikan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.pendidikan_ibu && (
                          <FormErrorMessage>
                            Masukan pendidikan ibu
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.pekerjaan_ibu}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Pekerjaan</FormLabel>
                        <Controller
                          name="pekerjaan_ibu"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPekerjaan?.data?.map((el) => ({
                                label: el.nama_pekerjaan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.pekerjaan_ibu && (
                          <FormErrorMessage>
                            Masukan Pekerjaan ibu
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.penghasilan_ibu}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Penghasilan per Bulan</FormLabel>
                        <Controller
                          name="penghasilan_ibu"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPenghasilan?.data?.map((el) => ({
                                label: el.penghasilan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.penghasilan_ibu && (
                          <FormErrorMessage>
                            Masukan penghasilan perbulan ibu
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
              )}

              {watchWaliMurid?.value === 2 && (
                <Box borderWidth="1px" borderRadius="md">
                  <Box borderWidth="1px" borderRadius="md" m={8}>
                    <Text
                      borderTopRadius={"md"}
                      bg="primary.600"
                      px={8}
                      py={4}
                      fontSize={"18px"}
                      color="white"
                      fontWeight={"600"}
                    >
                      Data Wali Murid
                    </Text>

                    <Box p={8}>
                      <FormControl isInvalid={errors?.nama_lengkap_wali} mb={4}>
                        <FormLabel>Nama Lengkap Wali</FormLabel>
                        <Input
                          {...register("nama_lengkap_wali", { required: true })}
                        />
                        {errors?.nama_lengkap_wali && (
                          <FormErrorMessage>
                            Masukan nama lengkap wali
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl isInvalid={errors?.tahun_lahir_wali} mb={4}>
                        <FormLabel>Tahun Lahir</FormLabel>
                        <Input
                          type="years"
                          {...register("tahun_lahir_wali", { required: true })}
                          w="50%"
                          placeholder="contoh: 2021"
                        />
                        {errors?.tahun_lahir_wali && (
                          <FormErrorMessage>
                            Masukan tahun lahir
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl isInvalid={errors?.no_handphone_wali} mb={4}>
                        <FormLabel>No Handphone </FormLabel>
                        <Input
                          type="number"
                          {...register("no_handphone_wali", { required: true })}
                          placeholder="contoh: 081521902355"
                        />
                        {errors?.no_handphone_wali && (
                          <FormErrorMessage>
                            Masukan no handphone
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.pendidikan_wali}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Pendidikan</FormLabel>
                        <Controller
                          name="pendidikan_wali"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPendidikan?.data?.map((el) => ({
                                label: el.nama_pendidikan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.pendidikan_wali && (
                          <FormErrorMessage>
                            Masukan pendidikan
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.pekerjaan_wali}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Pekerjaan</FormLabel>
                        <Controller
                          name="pekerjaan_wali"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPekerjaan?.data?.map((el) => ({
                                label: el.nama_pekerjaan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.pekerjaan_wali && (
                          <FormErrorMessage>Masukan Pekerjaan</FormErrorMessage>
                        )}
                      </FormControl>
                      <FormControl
                        isInvalid={errors?.penghasilan_wali}
                        mb={4}
                        w="50%"
                      >
                        <FormLabel>Penghasilan per Bulan</FormLabel>
                        <Controller
                          name="penghasilan_wali"
                          control={control}
                          defaultValue=""
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Select
                              onChange={(val) => onChange(val)}
                              value={value}
                              options={listPenghasilan?.data?.map((el) => ({
                                label: el.penghasilan,
                                value: el.id,
                              }))}
                            />
                          )}
                        />
                        {errors?.penghasilan_wali && (
                          <FormErrorMessage>
                            Masukan penghasilan perbulan
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
              )}

              <Box pt={4} display="flex" justifyContent="space-between">
                <Button
                  bg="success.500"
                  _hover={{ bg: "success.600" }}
                  color="white"
                  fontWeight="100"
                  fontSize="18px"
                  px={4}
                  onClick={prevStep}
                >
                  Sebelumnya
                </Button>
                <Button
                  bg="primary.600"
                  _hover={{ bg: "primary.700" }}
                  color="white"
                  fontWeight="100"
                  fontSize="18px"
                  px={4}
                  onClick={nextStep}
                >
                  Selanjutnya
                </Button>
              </Box>
            </Step>
            <Step key="step_3">
              <FormControl isInvalid={errors?.provinsi} mb={4} w="50%">
                <FormLabel>Provinsi</FormLabel>
                <Controller
                  name="provinsi"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <AsyncSelect
                      value={value}
                      cacheOptions
                      defaultOptions
                      loadOptions={listProvinsi}
                      onChange={(val) => onChange(val)}
                    />
                  )}
                />
                {errors?.provinsi && (
                  <FormErrorMessage>Masukan provinsi</FormErrorMessage>
                )}
              </FormControl>
              {watchProvinsi && (
                <FormControl isInvalid={errors?.kabkota} mb={4} w="50%">
                  <FormLabel>Kabupaten</FormLabel>
                  <Controller
                    name="kabkota"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <AsyncSelect
                        value={value}
                        cacheOptions
                        defaultOptions
                        loadOptions={listKabKota}
                        onChange={(val) => onChange(val)}
                      />
                    )}
                  />
                  {errors?.kabkota && (
                    <FormErrorMessage>Masukan kabupaten</FormErrorMessage>
                  )}
                </FormControl>
              )}
              {watchKabKota && (
                <FormControl isInvalid={errors?.kecamatan} mb={4} w="50%">
                  <FormLabel>Kecamatan</FormLabel>
                  <Controller
                    name="kecamatan"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <AsyncSelect
                        value={value}
                        cacheOptions
                        defaultOptions
                        loadOptions={listKecamatan}
                        onChange={(val) => onChange(val)}
                      />
                    )}
                  />
                  {errors?.kecamatan && (
                    <FormErrorMessage>Masukan kecamatan</FormErrorMessage>
                  )}
                </FormControl>
              )}
              {watchKecamatan && (
                <FormControl isInvalid={errors?.desa} mb={4} w="50%">
                  <FormLabel>Desa</FormLabel>
                  <Controller
                    name="desa"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <AsyncSelect
                        value={value}
                        cacheOptions
                        defaultOptions
                        loadOptions={listDesa}
                        onChange={(val) => onChange(val)}
                      />
                    )}
                  />
                  {errors?.desa && (
                    <FormErrorMessage>Masukan desa</FormErrorMessage>
                  )}
                </FormControl>
              )}
              <FormControl isInvalid={errors?.alamat_domisili} mb={4}>
                <FormLabel>Alamat Domisili</FormLabel>
                <Input {...register("alamat_domisili", { required: true })} />
                {errors?.alamat_domisili && (
                  <FormErrorMessage>Masukan alamat domisili</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.jarakke_sekolah} mb={4}>
                <FormLabel>Jarak ke Sekolah</FormLabel>
                <Input
                  type="number"
                  {...register("jarakke_sekolah", { required: true })}
                />
                {errors?.jarakke_sekolah && (
                  <FormErrorMessage>Masukan jarak kesekolah</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors?.waktu_tempuh} mb={4}>
                <FormLabel>Waktu Tempuh (jam:menit)</FormLabel>
                <Input
                  type="time"
                  {...register("waktu_tempuh", { required: true })}
                />
                {errors?.waktu_tempuh && (
                  <FormErrorMessage>Masukan jarak kesekolah</FormErrorMessage>
                )}
              </FormControl>
              <Box pt={4} display="flex" justifyContent="space-between">
                <Button
                  bg="success.500"
                  _hover={{ bg: "success.600" }}
                  color="white"
                  fontWeight="100"
                  fontSize="18px"
                  px={4}
                  onClick={prevStep}
                >
                  Sebelumnya
                </Button>
                <Button
                  bg="primary.600"
                  _hover={{ bg: "primary.700" }}
                  color="white"
                  fontWeight="100"
                  fontSize="18px"
                  px={4}
                  onClick={handleSubmit(onSubmit)}
                >
                  Kirim
                </Button>
              </Box>
            </Step>
          </Steps>
        </Box>
      </Container>
    </Layouts>
  );
};

export default Pendaftaran;
